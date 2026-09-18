"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import ForecastCard from "@/components/ForecastCard";
import TemperatureChart from "@/components/TemperatureChart";
import Loading from "@/components/Loading";


export default function Home() {
	const [weather, setWeather] = useState<any>(null);
	const [forecast, setForecast] = useState<any>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const searchWeather = async (city: string) => {
		try {
			setLoading(true);
			setError("");

			const response = await fetch(
				`/api/weather?city=${encodeURIComponent(city)}`
			);
			const data = await response.json();

			if (!response.ok || data.error || data.cod === "404" || data.cod === 404) {
				setError("City not found");
				setWeather(null);
				setForecast(null);
				return;
			}

			setWeather(data.weather);
			setForecast(data.forecast);
		} catch {
			setError("Something went wrong");
		} finally {
			setLoading(false);
		}
	};

	return (
		<main className="min-h-screen bg-slate-900 p-6">
			<header className="mb-10 text-center">
				<h1 className="text-5xl font-extrabold tracking-wide text-white">
					Weather Dashboard
				</h1>
				<p className="mt-3 text-gray-300">Real-time weather forecast</p>
			</header>

			<SearchBar onSearch={searchWeather} />
			{loading && <Loading />}

			{error && (
				<div className="mt-5 rounded-xl bg-red-500 px-5 py-3 text-white">
					❌ {error}
				</div>
			)}

			{weather && <WeatherCard weather={weather} />}
			{forecast && <ForecastCard forecast={forecast} />}
			{forecast && <TemperatureChart forecast={forecast} />}
		</main>
	);
}