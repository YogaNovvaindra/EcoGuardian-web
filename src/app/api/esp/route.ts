import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

//create get esp function
export async function GET() {
  try {
    const esp = await db.esp.findMany(
      {
        include: {
          data: {
            orderBy: {
              createdAt: "desc",
            },
            take: 1,
          },
        },
      }
    );
    return NextResponse.json(esp, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}

//create post esp function
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nama, latitude, longitude } = body;

    const esp = await db.esp.create({
      data: {
        nama: nama,
        latitude: latitude,
        longitude: longitude,
      },
    });
    return NextResponse.json(esp, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}
