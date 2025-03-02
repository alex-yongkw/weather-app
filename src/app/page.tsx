"use client";

import styles from "./page.module.css";
import { WeatherSearchBar } from "@/components/weather-search-bar";
import {
  WeatherInfo,
  type Props as WeatherInfoProps,
} from "@/components/weather-info";
import { SearchHistory } from "@/components/search-history";
import { useCallback, useState } from "react";
import {
  ErrorResponse,
  type WeatherInfo as WeatherInfoRes,
} from "./server-functions/get-weather";

export default function Home() {
  const temperature: WeatherInfoProps["temperature"] = {
    current: 26,
    high: 29,
    low: 25,
  };

  const location: WeatherInfoProps["location"] = {
    city: "Johor",
    country: "MY",
  };

  const [weatherInfo, setWeatherInfo] = useState<WeatherInfoRes | null>(null);
  const [searchError, setSearchError] = useState<ErrorResponse | null>(null);

  const updateWeather = useCallback((weather: WeatherInfoRes) => {
    setWeatherInfo(weather);
    setSearchError(null);
  }, []);

  const updateError = useCallback((error: ErrorResponse) => {
    setSearchError(error);
    setWeatherInfo(null);
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <WeatherSearchBar
          onSearchSuccess={updateWeather}
          onSearchError={updateError}
        />
        <div className={styles.weatherAndSearchHistory}>
          {weatherInfo ? (
            <WeatherInfo
              temperature={weatherInfo.temperature}
              location={weatherInfo.location}
              date={weatherInfo.timestamp}
              humidity={weatherInfo.humidity}
              weather={weatherInfo.condition}
            />
          ) : (
            <div>error</div>
          )}

          <SearchHistory />
        </div>
      </main>
    </div>
  );
}
