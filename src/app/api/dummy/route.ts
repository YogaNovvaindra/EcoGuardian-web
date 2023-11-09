import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

//create get esp function
export async function GET() {
  try {
    // let dummyData: dummy[];

    const dummyData = await db.dummy.findMany({
      select: {
        id: true,
        co2: true,
        temperature: true,
        humidity: true,
        pm25: true,
        mq135: true,
        mq2: true,
        mq7: true,
        createdAt: true,
        // updatedAt: true,
      },
      orderBy: [{ createdAt: "desc" }],
      take: 60,
    });
    return NextResponse.json(dummyData, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!", error },
      { status: 500 }
    );
  }
}
