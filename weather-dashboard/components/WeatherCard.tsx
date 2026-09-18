"use client";

import { motion } from "framer-motion";
import Image from "next/image";



interface WeatherCardProps{

    weather:any;

}


export default function WeatherCard({weather}:WeatherCardProps){

return(

<motion.div

initial={{
    opacity:0,
    y:30
}}

animate={{
    opacity:1,
    y:0
}}

transition={{
    duration:0.5
}}

className="
bg-white/90
backdrop-blur-lg
text-black
rounded-3xl
p-8
shadow-2xl
w-full
max-w-xl
"

>
    


<h2 className="text-3xl font-bold">
{weather.name}
</h2>

{
weather.weather && weather.weather[0] && (

<Image
src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
width={100}
height={100}
alt="weather icon"
/>

)
}


<div className="text-6xl font-bold my-5">

{
weather.main?.temp !== undefined
?
Math.round(weather.main.temp)
:
"--"
}°C

</div>


<p className="text-xl capitalize">

{
weather.weather?.[0]?.description || "No data available"
}

</p>



<div className="grid grid-cols-2 gap-4 mt-6">


<div>
Humidity
<br/>
<b>
{
weather.main?.humidity !== undefined
?
weather.main.humidity
:
"--"
}%
</b>
</div>


<div>
Wind
<br/>
<b>
{
weather.wind?.speed !== undefined
?
weather.wind.speed
:
"--"
} m/s
</b>
</div>


<div>
Pressure
<br/>
<b>
{
weather.main?.pressure !== undefined
?
weather.main.pressure
:
"--"
} hPa
</b>
</div>


<div>
Feels Like
<br/>
<b>
{
weather.main?.feels_like !== undefined
?
Math.round(weather.main.feels_like)
:
"--"
}°C
</b>
</div>


</div>


</motion.div>

)

}