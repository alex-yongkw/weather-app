"use client";

import styles from "./page.module.css";
import { WeatherSearchBar } from "@/components/weather-search-bar";
import {
  WeatherInfo,
  type Props as WeatherInfoProps,
} from "@/components/weather-info";
import { SearchHistory } from "@/components/search-history";
import { useCallback, useMemo, useState } from "react";
import {
  ErrorResponse,
  type WeatherInfo as WeatherInfoRes,
} from "./server-functions/get-weather";
import { ApiError } from "@/ui/api-error";
import { GreetingCard } from "@/ui/greeting-card";
import { addToSearchHistory } from "@/dexie-db";

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

  const updateWeather = useCallback(async (weather: WeatherInfoRes) => {
    setWeatherInfo(weather);
    setSearchError(null);

    // add to search history
    await addToSearchHistory({
      location: {
        city: weather.location.city,
        country: weather.location.country,
        lat: weather.location.coordinate.lat,
        lon: weather.location.coordinate.lon,
      },
      timestamp: weather.timestamp,
    });
  }, []);

  const updateError = useCallback((error: ErrorResponse) => {
    setSearchError(error);
    setWeatherInfo(null);
  }, []);

  const showGreeting = useMemo(() => {
    return weatherInfo === null && searchError === null;
  }, [weatherInfo, searchError]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <WeatherSearchBar
          onSearchSuccess={updateWeather}
          onSearchError={updateError}
        />
        <div className={styles.weatherAndSearchHistory}>
          {showGreeting && (
            <GreetingCard message="Hi there, you can check weather using search bar above." />
          )}
          {weatherInfo && (
            <WeatherInfo
              temperature={weatherInfo.temperature}
              location={weatherInfo.location}
              date={weatherInfo.timestamp}
              humidity={weatherInfo.humidity}
              weather={weatherInfo.condition}
            />
          )}
          {searchError && <ApiError errorMessage={searchError.error} />}
          <SearchHistory />
        </div>
      </main>
    </div>
  );
}
