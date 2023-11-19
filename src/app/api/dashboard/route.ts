import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const data = await db.mean.findFirst({
            orderBy: [{ createdAt: "desc" }],
        });
        // forecast find data that createdat + 1hour from now using like syntax
        const forecast = await db.forecast_mean.findMany({
            where: { state: true },
            orderBy: [{ createdAt: "desc" }],
        });

        if (!data) {
            return NextResponse.json({ message: "No data found!" }, { status: 404 });
        } 
        const temperature = data?.temperature;
        const humidity = data?.humidity;
        const forecast_temperature = forecast[30].temperature;
        const forecast_humidity = forecast[30].humidity;
        const forecast_createdAt = forecast[30].createdAt.toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
        
        const result = {
            temperature,
            humidity,
            forecast_temperature,
            forecast_humidity,
            forecast_createdAt,
        }

        return NextResponse.json(result, { status: 200 });
    }
    catch (error) {
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
    }
}