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

        const image_detector = await db.image_detector.findMany({
            orderBy: [{ createdAt: "desc" }],
            take: 1,
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

        const now = new Date().toUTCString();  // Get the current date in UTC
        const imageCreatedAt = new Date(image_detector[0].createdAt);

        const timeDifference = Math.abs(new Date(now).getTime() - imageCreatedAt.getTime());
        const minutesDifference = Math.floor(timeDifference / (1000 * 60));

        let smoke_status;

        if (minutesDifference > 5) {
            smoke_status = "No Smoke Detected";
        } else {
            // Handle the case where the time difference is 5 minutes or less (smoke detected)
            // You can set smoke_status to something else or perform additional actions.
            smoke_status = image_detector[0].label;
        }

        // Now, smoke_status contains the result based on the time difference

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
            smoke_status,
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