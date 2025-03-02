"use client";

import { SearchHistoryRow } from "@/ui/search-history-row";
import { Group, Label } from "react-aria-components";
import { useLiveQuery } from "dexie-react-hooks";
import { deleteSearchHistoryById, getLatestTenRecord } from "@/dexie-db";
import { useCallback } from "react";
import {
  Coordinate,
  getWeatherByCoordinate,
  type ErrorResponse,
  type WeatherInfo,
} from "@/app/server-functions/get-weather";
import styles from "./styles.module.css";
import { NoRecord } from "@/ui/no-record";

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

export const SearchHistory = ({ onSearchSuccess, onSearchError }: Props) => {
  const latest10SearchHistory = useLiveQuery(
    async () => await getLatestTenRecord()
  );

  const searchWeather = useCallback(
    (coordinate: Coordinate) => async () => {
      console.log("** coordinate:", coordinate);

      const weatherInfo = await getWeatherByCoordinate(coordinate);

      if (isSuccessResponse(weatherInfo)) {
        onSearchSuccess(weatherInfo);
      } else {
        onSearchError(weatherInfo);
      }
    },
    []
  );

  const deleteSearchHistory = useCallback(
    (id: number) => () => {
      deleteSearchHistoryById(id);
    },
    []
  );

  return (
    <Group className={styles.container}>
      <Label className={styles.label}>Search History</Label>
      <Group className={styles.historyList}>
        {latest10SearchHistory && latest10SearchHistory.length > 0 ? (
          latest10SearchHistory.map((search) => (
            <SearchHistoryRow
              key={search.id}
              city={search.location.city}
              country={search.location.country}
              date={search.timestamp}
              onSearch={searchWeather({
                lat: search.location.lat,
                lon: search.location.lon,
              })}
              onDelete={deleteSearchHistory(search.id)}
            />
          ))
        ) : (
          <NoRecord message="No Record Found" />
        )}
      </Group>
    </Group>
  );
};
