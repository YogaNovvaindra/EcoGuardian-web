import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { promises as fsPromises } from "fs";

export async function PUT(req: Request, { params }: { params: { id_user: string }} ) {
  const { id_user } = params;

  try {
    // Validate the 'image' data here if needed

    const imageBuffer = await req.arrayBuffer();
    const imagePath = `images/user/${id_user}.jpg`; // Path to save the image

    // Convert the ArrayBuffer to a Buffer
    const buffer = Buffer.from(imageBuffer);

    // Save the image to the local directory
    await fsPromises.writeFile(imagePath, buffer);

    // Debug: Log the content of the saved file
    console.log('Saved Image Content:', buffer.toString());

    // Update the user's profile image in the database
    const updatedUser = await db.user.update({
      where: { id: id_user },
      data: {
        image: imagePath,
      },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error('Error updating user image:', error);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}
