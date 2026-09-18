"use client";

import {motion} from "framer-motion";


interface Props {
    forecast: any;
}


export default function ForecastCard({ forecast }: Props) {


    const dailyForecast = forecast.list.filter(
        (item: any, index: number) => index % 8 === 0
    );


    return (

        <div className="
        grid 
        grid-cols-2 
        md:grid-cols-5 
        gap-4 
        mt-8
        ">


            {
                dailyForecast.map((item: any) => (

                    <motion.div

                                key={item.dt}

                        whileHover={{
                        scale:1.05
                        }}

                        className="
                        bg-white/90
                        backdrop-blur
                        text-black
                        rounded-2xl
                        p-5
                        text-center
                        shadow-xl
                        "

                        >
                            


                        <p className="font-bold">

                            {
                                new Date(item.dt_txt)
                                    .toLocaleDateString(
                                        "en-US",
                                        {
                                            weekday: "short"
                                        }
                                    )
                            }

                        </p>


                        <img
                            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                            alt="weather"
                        />


                        <h2 className="text-2xl font-bold">

                            {Math.round(item.main.temp)}°C

                        </h2>


                        <p className="capitalize text-sm">

                            {item.weather[0].description}

                        </p>


                    </motion.div>

                ))
            }


        </div>

    )

}