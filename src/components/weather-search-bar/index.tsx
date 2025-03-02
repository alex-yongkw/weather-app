"use client";

import { SearchButton } from "@/ui/button/search";
import { CityTextField } from "@/ui/city-text-field";
import { Group } from "react-aria-components";
import styles from "./styles.module.css";
import {
  type ErrorResponse,
  getWeather,
  type WeatherInfo,
} from "@/app/server-functions/get-weather";
import { useState } from "react";

// typescript type guard
function isSuccessResponse(
  res: WeatherInfo | ErrorResponse
): res is WeatherInfo {
  return (res as WeatherInfo).timestamp instanceof Date;
}

type Props = {
  onSearchSuccess: (weatherInfo: WeatherInfo) => void;
  onSearchError: (searchError: ErrorResponse) => void;
};

export const WeatherSearchBar = ({ onSearchSuccess, onSearchError }: Props) => {
  const [city, setCity] = useState("");

  const fetchWeatherInfo = async () => {
    const weatherInfo = await getWeather(city);

    if (isSuccessResponse(weatherInfo)) {
      onSearchSuccess(weatherInfo);
    } else {
      onSearchError(weatherInfo);
    }
  };

  return (
    <Group className={styles.container}>
      <div className={styles.searchField}>
        <CityTextField onChange={setCity} />
      </div>
      <SearchButton onClick={fetchWeatherInfo} />
    </Group>
  );
};
