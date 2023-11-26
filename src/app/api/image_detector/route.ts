import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

//create get esp function
export async function GET() {
  try {
    const image_detector = await db.image_detector.findMany({
      orderBy: {
        createdAt: "desc",
      }
    });
    if (image_detector.length === 0) {
      return NextResponse.json({ message: "image_detector not found!" }, { status: 404 });
    }
    return NextResponse.json(image_detector, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}

//create post esp function
export async function POST(req: Request) {
  try {
    const { label, confidence} = await req.json();

    const image_detector = await db.image_detector.create({
      data: {
        label: label,
        confidence: confidence,
      },
    });
    return NextResponse.json(image_detector, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" + error },
      { status: 500 }
    );
  }
}
