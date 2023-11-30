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
        const roundtemperature = temperature?.toFixed(1);
        const humidity = data?.humidity;
        const roundhumidity = humidity?.toFixed(1);
        const forecast_temperature = forecast[30].temperature;
        const roundforecast_temperature = forecast_temperature?.toFixed(1);
        const forecast_humidity = forecast[30].humidity;
        const roundforecast_humidity = forecast_humidity?.toFixed(1);
        const ispu = ispu_mean?.ispu;
        const roundispu = ispu?.toFixed(1);
        const forecast_ispu = ispu_forecast[30].ispu;
        const roundforecast_ispu = forecast_ispu?.toFixed(1);
        const forecast_createdAt = forecast[30].createdAt.toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
        const ispu_createdAt = ispu_forecast[30].createdAt.toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });

        let smoke_status;
        let image_status;
        let desc = [];

        if (temperature !== null &&temperature !== undefined) {
            if (temperature < 15) {
                desc.push("Temperature right now is "+roundtemperature+"°C, it's cold outside. Please wear a jacket!");
            }
            else if (temperature >= 15 && temperature < 25) {
                desc.push("Temperature right now is "+roundtemperature+"°C, it's a good weather outside. Enjoy your day!");
            }
            else if (temperature >= 25 && temperature < 30) {
                desc.push("Temperature right now is "+roundtemperature+"°C, it's a little bit hot outside. Don't forget to drink water!");
            }
            else if (temperature >= 30 && temperature < 35) {
                desc.push("Temperature right now is "+roundtemperature+"°C, it's hot outside. Please stay hydrated!");
            }
            else if (temperature >= 35) {
                desc.push("Temperature right now is "+roundtemperature+"°C, it's very hot outside. Please stay hydrated and stay inside whenever possible!");
            }
        }

        if (humidity !== null && humidity !== undefined) {
            if (humidity < 40) {
                desc.push("Humidity right now is "+roundhumidity+"%, it's dry outside. Please drink more water!");
            }
            else if (humidity >= 40 && humidity < 70) {
                desc.push("Humidity right now is "+roundhumidity+"%, it's a good weather outside. Enjoy your day!");
            }
            else if (humidity >= 70) {
                desc.push("Humidity right now is "+roundhumidity+"%, it's humid outside. Please wear a comfortable clothes when going outside!");
            }
        }

        if (ispu !== null && ispu !== undefined) {
            if (ispu < 51) {
                desc.push("Air Pollution Index right now is "+roundispu+", it's a good air quality outside. Enjoy your day!");
            }
            else if (ispu >= 51 && ispu < 101) {
                desc.push("Air Pollution Index right now is "+roundispu+", it's a moderate air quality outside. It may be effected for some people like children, elderly, and people with lung disease.");
            }
            else if (ispu >= 101 && ispu < 201) {
                desc.push("Air Pollution Index right now is "+roundispu+", it's an unhealthy air quality outside. Please wear a mask when going outside!");
            }
            else if (ispu >= 201 && ispu < 301) {
                desc.push("Air Pollution Index right now is "+roundispu+", it's a very unhealthy air quality outside. It can cause health problems for everyone, please reduce any outdoor activities!");
            }
            else if (ispu >= 301) {
                desc.push("Air Pollution Index right now is "+roundispu+", it's a hazardous air quality outside. Please stay inside whenever possible and wear a mask if you really have to go outside!");
            }
        }

        const now = new Date().toUTCString();  // Get the current date in UTC
        const imageCreatedAt = new Date(image_detector[0].createdAt);

        const timeDifference = Math.abs(new Date(now).getTime() - imageCreatedAt.getTime());
        const minutesDifference = Math.floor(timeDifference / (1000 * 60));

        if (minutesDifference > 5) {
            image_status = "No Smoke Detected";
            desc.push("No smoke detected in the last 5 minutes");
        } else {
            smoke_status = image_detector[0].label;
            if (smoke_status !== null && smoke_status !== undefined) {
                if (smoke_status === "low_smoke") {
                    desc.push ("There is a low smoke detected in the last 5 minutes. Please check the camera for more information");
                    image_status = "Low Smoke Detected";
                } else if (smoke_status === "medium_smoke") {
                    desc.push("There is a medium smoke detected in the last 5 minutes. Please check the camera for more information");
                    image_status = "Medium Smoke Detected";
                } else if (smoke_status === "high_smoke") {
                    desc.push("There is a high smoke detected in the last 5 minutes. Please check the camera for more information");
                    image_status = "High Smoke Detected";
                }
            }
        }

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
            desc,
            roundtemperature,
            roundhumidity,
            roundforecast_temperature,
            roundforecast_humidity,
            roundispu,
            roundforecast_ispu,
            ispu_status,
            image_status,
            forecast_createdAt,
            ispu_createdAt
        }

        return NextResponse.json(result, { status: 200 });
    }
    catch (error) {
        return NextResponse.json({ message: "Something went wrong!" + error }, { status: 500 });
    }
}