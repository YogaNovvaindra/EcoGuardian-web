import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

//create data post function
// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { id_esp, suhu, kelembaban, mq2_smoke, mq2_lpg, mq7_co, mq135_co2, mq135_nh4 } = body;
//     const data = await db.data.create({
//       data: {
//         id_esp: id_esp,
//         suhu: suhu,
//         kelembaban: kelembaban,
//         mq2_smoke: mq2_smoke,
//         mq2_lpg: mq2_lpg,
//         mq7_co: mq7_co,
//         mq135_co2: mq135_co2,
//         mq135_nh4: mq135_nh4,
//       },
//     });
//     return NextResponse.json(data, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
//   }
// }

// //create data get function
// export async function GET() {
//   try {
//     const data = await db.data.findMany();
//     return NextResponse.json(data, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
//   }
// }
