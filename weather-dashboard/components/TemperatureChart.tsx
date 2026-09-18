"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";


interface Props {
    forecast:any;
}


export default function TemperatureChart({forecast}:Props){


    const data = forecast.list
    .filter(
        (item:any,index:number)=>index % 8 === 0
    )
    .map((item:any)=>({

        day:new Date(item.dt_txt)
        .toLocaleDateString(
            "en-US",
            {
                weekday:"short"
            }
        ),

        temperature:item.main.temp

    }));


return(

<div
className="
bg-white
rounded-xl
p-6
mt-8
w-full
max-w-xl
"
>

<h2
className="
text-black
text-xl
font-bold
mb-5
"
>
Temperature Trend
</h2>


<ResponsiveContainer
width="100%"
height={300}
>

<LineChart data={data}>


<XAxis
dataKey="day"
/>


<YAxis/>


<Tooltip/>


<Line

type="monotone"

dataKey="temperature"

stroke="#2563eb"

strokeWidth={3}

/>


</LineChart>


</ResponsiveContainer>


</div>

)


}