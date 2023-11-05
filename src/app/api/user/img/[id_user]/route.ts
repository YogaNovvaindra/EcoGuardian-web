import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { join } from "path";
import { readFile, writeFile } from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

export async function PUT(req: Request, { params }: { params: { id_user: string }}) {
  const { id_user } = params;

  const data = await req.formData();
  const file: File | null = data.get("userimg") as unknown as File;

  if (!file) {
    return NextResponse.json({ message: "Image is required!" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const fileExtension = file.name.split(".").pop() || "txt";

  // gunakan uuidv4 untuk membuat nama file untuk gambar_kandang
  const id = uuidv4();
  const namaFile = `${id_user}.${fileExtension}`;

  // With the file data in the buffer, you can do whatever you want with it.
  // For this, we'll just write it to the filesystem in a new location
  const path = join(process.cwd(), "/images/user/", namaFile);

  try {
    await writeFile(path, buffer);
    console.log(`open ${path} to see the uploaded file`);

    // Update the user's profile image in the database
    const updatedUser = await db.user.update({
      where: { id: id_user },
      data: {
        image: namaFile,
      },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error('Error updating user image:', error);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}

export async function GET(req: Request, { params }: { params: { id_user: string }} ) {
  const { id_user } = params;
  //get user image file
  const user = await db.user.findUnique({
    where: {
      id: id_user,
    },
  });

  if (!user) {
    return NextResponse.json({ message: "User not found!" }, { status: 404 });
  }

  const userImagePath = user.image
  ? join(process.cwd(), 'images/user/', user.image)
  : null;

  if (!userImagePath) {
    return NextResponse.json({ message: "User image not found!" }, { status: 404 });
  }

  const data = fs.readFileSync(userImagePath);

  return new Response(data, {
    headers: {
      "Content-Type": "image",
    },
  });

}
