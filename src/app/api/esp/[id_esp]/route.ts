import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id_esp: string } }
) {
  const { id_esp } = params;

  try {
    const esp = await db.esp.findUnique({
      where: {
        id: id_esp,
      },
    });

    if (!esp) {
      return NextResponse.json({ message: "ESP not found!" }, { status: 404 });
    }
    return NextResponse.json(esp, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id_esp: string } }
) {
  const { id_esp } = params;

  try {
    const body = await req.json();
    const { nama, latitude, longitude, image } = body;

    if (!nama || !latitude || !longitude) {
      return NextResponse.json(
        { message: "Nama, latitude, and longitude are required!" },
        { status: 400 }
      );
    }

    const esp = await db.esp.update({
      where: {
        id: id_esp,
      },
      data: {
        nama: nama,
        latitude: latitude,
        longitude: longitude,
        image: image,
      },
    });

    if (!esp) {
      return NextResponse.json({ message: "ESP not found!" }, { status: 404 });
    }
    return NextResponse.json(esp, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id_esp: string } }
) {
  const { id_esp } = params;

  try {
    const esp = await db.esp.delete({
      where: {
        id: id_esp,
      },
    });

    if (!esp) {
      return NextResponse.json({ message: "ESP not found!" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Delete User with id " + id_esp + " Success", esp },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}
