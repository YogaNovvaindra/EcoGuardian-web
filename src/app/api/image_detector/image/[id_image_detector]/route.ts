import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { join } from "path";
import { readFile, writeFile } from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

export async function PUT(req: Request, { params }: { params: { id_image_detector: string }}) {
  const { id_image_detector } = params;

  const data = await req.formData();
  const file: File | null = data.get("image") as unknown as File;

  if (!file) {
    return NextResponse.json({ message: "Image is required!" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const fileExtension = file.name.split(".").pop() || "txt";

  // gunakan uuidv4 untuk membuat nama file untuk gambar_kandang
  const id = uuidv4();
  const namaFile = `${id_image_detector}.${fileExtension}`;

  // With the file data in the buffer, you can do whatever you want with it.
  // For this, we'll just write it to the filesystem in a new location
  const path = join(process.cwd(), "/images/image_detector/", namaFile);

  try {
    await writeFile(path, buffer);
    console.log(`open ${path} to see the uploaded file`);

    // Update the image_detector's profile image in the database
    const updatedimage_detector = await db.image_detector.update({
      where: { id: id_image_detector },
      data: {
        image: namaFile,
      },
    });

    return NextResponse.json(updatedimage_detector, { status: 200 });
  } catch (error) {
    console.error('Error updating image_detector image:', error);
    return NextResponse.json({ message: "Something went wrong!" + error }, { status: 500 });
  }
}

export async function GET(req: Request, { params }: { params: { id_image_detector: string }} ) {
  const { id_image_detector } = params;
  //get image_detector image file
  const image_detector = await db.image_detector.findUnique({
    where: {
      id: id_image_detector,
    },
  });

  if (!image_detector) {
    return NextResponse.json({ message: "image_detector not found!" }, { status: 404 });
  }

  const image_detectorImagePath = image_detector.image
  ? join(process.cwd(), 'images/image_detector/', image_detector.image)
  : null;

  if (!image_detectorImagePath) {
    return NextResponse.json({ message: "image_detector image not found!" }, { status: 404 });
  }

  const data = fs.readFileSync(image_detectorImagePath);

  return new Response(data, {
    headers: {
      "Content-Type": "image",
    },
  });

}
