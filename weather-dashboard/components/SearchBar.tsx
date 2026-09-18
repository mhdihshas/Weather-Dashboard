"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";


interface SearchBarProps {
    onSearch: (city:string)=>void;
}


export default function SearchBar({onSearch}:SearchBarProps){

    const [city,setCity] = useState("");


    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();

        if(city.trim()){
            onSearch(city);
        }
    }


    return(

        <form 
        onSubmit={handleSubmit}
        className="flex gap-3 w-full max-w-xl"
        >

            <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            className="
            flex-1
            px-5
            py-3
            rounded-xl
            bg-white
            text-black
            outline-none
            "
            />


            <button
            className="
            bg-blue-500
            px-5
            rounded-xl
            text-white
            hover:bg-blue-600
            "
            >

            <FiSearch size={24}/>

            </button>


        </form>

    )

}