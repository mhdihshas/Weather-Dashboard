import { NextResponse } from "next/server";


export async function GET(request: Request){

    const {searchParams}=new URL(request.url);

    const city=searchParams.get("city");


    if(!city){

        return NextResponse.json(
            {
                error:"City is required"
            },
            {
                status:400
            }
        );

    }


    const apiKey=process.env.OPENWEATHER_API_KEY;


    const currentWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );


    const forecastWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    );


    const weather = await currentWeather.json();

    const forecast = await forecastWeather.json();


    return NextResponse.json({
        weather,
        forecast
    });


}