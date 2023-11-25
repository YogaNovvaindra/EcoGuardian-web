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

        const ispu_mean = await db.ispu_mean.findFirst({
            orderBy: [{ createdAt: "desc" }],
        });

        const ispu_forecast = await db.ispu_mean_forecast.findMany({
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
        const ispu = ispu_mean?.ispu;
        const forecast_ispu = ispu_forecast[30].ispu;
        const forecast_createdAt = forecast[30].createdAt.toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
        const ispu_createdAt = ispu_forecast[30].createdAt.toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });

        let ispu_status;
        if (ispu !== null && ispu !== undefined) {
            if (ispu < 51) {
                ispu_status = "Good";
            } else if (ispu >= 51 && ispu < 101) {
                ispu_status = "Moderate";
            } else if (ispu >= 101 && ispu < 201) {
                ispu_status = "Unhealthy";
            } else if (ispu >= 201 && ispu < 301) {
                ispu_status = "Very Unhealthy";
            } else if (ispu >= 301) {
                ispu_status = "Hazardous";
            }
        }

        const result = {
            temperature,
            humidity,
            forecast_temperature,
            forecast_humidity,
            ispu,
            ispu_status,
            forecast_ispu,
            forecast_createdAt,
            ispu_createdAt
        }

        return NextResponse.json(result, { status: 200 });
    }
    catch (error) {
        return NextResponse.json({ message: "Something went wrong!" + error }, { status: 500 });
    }
}