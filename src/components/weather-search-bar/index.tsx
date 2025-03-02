"use client";

import { SearchButton } from "@/ui/button/search";
import { CityTextField } from "@/ui/city-text-field";
import { Group } from "react-aria-components";
import styles from "./styles.module.css";

export const WeatherSearchBar = () => {
  const fetchWeatherInfo = async (city: string) => {
    // const weatherInfo = await getWeather(city);

    console.log("** weatherInfo:", "no-op");
  };

  return (
    <Group className={styles.container}>
      <div className={styles.searchField}>
        <CityTextField onChange={fetchWeatherInfo} />
      </div>
      <SearchButton onClick={() => console.log("clicked !")} />
    </Group>
  );
};
