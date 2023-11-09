import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// export async function GET(req: Request, { params }: { params: { id_data: string }} ) {
//     const { id_data } = params;

//     try {
//         const data = await db.data.findUnique({
//             where: {
//                 id: id_data,
//             },
//         });
        
//         if (!data) {
//             return NextResponse.json({ message: "Data not found!" }, { status: 404 });
//         }
//         return NextResponse.json(data, { status: 200 });
//     }
//     catch (error) {
//         return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
//     }
// }

// export async function PUT(req: Request, { params }: { params: { id_data: string }} ) {
//     const { id_data } = params;

//     try {
//         const body = await req.json();
//         const { id_esp, suhu, kelembaban, mq2_smoke, mq2_lpg, mq7_co, mq135_co2, mq135_nh4 } = body;

//         if (!id_esp || !suhu || !kelembaban || !mq2_smoke || !mq2_lpg || !mq7_co || !mq135_co2 || !mq135_nh4) {
//             return NextResponse.json({ message: "ID ESP, suhu, kelembaban, mq2_smoke, mq2_lpg, mq7_co, mq135_co2, and mq135_nh4 are required!" }, { status: 400 });
//         }

//         const data = await db.data.update({
//             where: {
//                 id: id_data,
//             },
//             data: {
//                 id_esp: id_esp,
//                 suhu: suhu,
//                 kelembaban: kelembaban,
//                 mq2_smoke: mq2_smoke,
//                 mq2_lpg: mq2_lpg,
//                 mq7_co: mq7_co,
//                 mq135_co2: mq135_co2,
//                 mq135_nh4: mq135_nh4,
//             },
//         });

//         if (!data) {
//             return NextResponse.json({ message: "Data not found!" }, { status: 404 });
//         }
//         return NextResponse.json(data, { status: 200 });
//     }
//     catch (error) {
//         return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
//     }
// }