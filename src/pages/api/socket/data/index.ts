import { NextApiRequest } from "next";
import { NextApiResponseServerIo } from "types/socket";
import { db } from "@/lib/db";

// export default async function handler(req: NextApiRequest, res: NextApiResponseServerIo) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }
//   try {
//     const { temperature, humidity } = req.body;

//     const sensorData = await db.sensor.create({
//       data: {
//         temperature,
//         humidity,
//       },
//     });

//     // emit data using server.io if available
//     res?.socket?.server?.io?.emit("sensors", sensorData);

//     console.log("sensorData", sensorData);
//     // consol log addSensorData

//     return res.status(200).json(sensorData);
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// }

export default async function handler(req: NextApiRequest, res: NextApiResponseServerIo) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }
    try {
        const { id_esp, 
            temperature, 
            humidity, 
            mq135_co, 
            msq135_alcohol,
            mq135_co2,
            mq135_toluen,
            mq135_nh4,
            mq135_aceton,
            mq2_h2,
            mq2_lpg,
            mq2_co,
            mq2_alcohol,
            mq2_propane,
            mq7_h2,
            mq7_lpg,
            mq7_ch4,
            mq7_co,
            mq7_alcohol,
            pm1,
            pm25, } = req.body;

        const sensorData = await db.data.create({
            data: {
                id_esp,
                temperature,
                humidity,
                mq135_co,
                msq135_alcohol,
                mq135_co2,
                mq135_toluen,
                mq135_nh4,
                mq135_aceton,
                mq2_h2,
                mq2_lpg,
                mq2_co,
                mq2_alcohol,
                mq2_propane,
                mq7_h2,
                mq7_lpg,
                mq7_ch4,
                mq7_co,
                mq7_alcohol,
                pm1,
                pm25,
            },
        });

        // emit data using server.io if available
        res?.socket?.server?.io?.emit("sensors", sensorData);

        console.log("sensorData", sensorData);
        // consol log addSensorData

        return res.status(200).json(sensorData);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}
