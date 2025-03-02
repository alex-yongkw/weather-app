"use client";

import { InfoText } from "@/ui/info-text";
import { LocationText } from "@/ui/location-text/indx";
import { TemperatureRange } from "@/ui/temperature-range.tsx";
import { formatDateTime } from "@/utils";
import { Group, Text } from "react-aria-components";
import styles from "./styles.module.css";
import { WeatherImage } from "@/ui/weather-image";

export type Props = {
  temperature: {
    current: number;
    high: number;
    low: number;
  };
  location: {
    city: string;
    country: string;
  };
  date: Date;
  humidity: number;
  weather: string;
};

export const WeatherInfo = ({
  temperature,
  location,
  date,
  humidity,
  weather,
}: Props) => {
  return (
    <Group className={styles.container}>
      <div className={styles.weatherImage}>
        <WeatherImage condition="sun" />
      </div>
      <Text className={styles.todayWeather}>Today&apos;s Weather</Text>
      <Text className={styles.temperatureReading}>
        {`${temperature.current}°`}
      </Text>
      <TemperatureRange high={temperature.high} low={temperature.low} />
      <Group className={styles.infoRow}>
        <LocationText
          city={location.city}
          country={location.country}
          color="grey"
          bold
        />
        <InfoText content={formatDateTime(date)} />
        <InfoText content={`Humidity: ${humidity}%`} />
        <InfoText content={weather} />
        {/* for mobile screen sive */}
        <Group className={styles.infoRowStacked}>
          <InfoText content={formatDateTime(date)} />
          <InfoText content={`Humidity: ${humidity}%`} />
          <InfoText content={weather} />
        </Group>
      </Group>
    </Group>
  );
};
