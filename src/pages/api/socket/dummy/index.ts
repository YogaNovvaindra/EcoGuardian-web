import { NextApiRequest } from "next";
import { NextApiResponseServerIo } from "types/socket";
import { db } from "@/lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponseServerIo) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const { temperature, humidity, co2, pm25, mq2, mq7, mq135 } = req.body;

    const dummyData = await db.dummy.create({
      data: {
        temperature,
        humidity,
        co2,
        pm25,
        mq2,
        mq7,
        mq135,
      },
    });

    // emit data using server.io if available
    res?.socket?.server?.io?.emit("addDummy", dummyData);

    console.log("dummyData", dummyData);
    // consol log adddummyData

    return res.status(200).json(dummyData);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
