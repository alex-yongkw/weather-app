"use client";

import { SearchHistoryRow } from "@/ui/search-history-row";
import { Group, Label } from "react-aria-components";
import { useLiveQuery } from "dexie-react-hooks";
import { deleteSearchHistoryById, getLatestTenRecord } from "@/dexie-db";
import { useCallback } from "react";
import styles from "./styles.module.css";

type Coordinate = {
  lat: number;
  lon: number;
};

export const SearchHistory = () => {
  const latest10SearchHistory = useLiveQuery(
    async () => await getLatestTenRecord()
  );

  const searchWeather = useCallback(
    (coordinate: Coordinate) => () => {
      console.log("** coordinate:", coordinate);
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
        {latest10SearchHistory &&
          latest10SearchHistory.length > 0 &&
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
          ))}
      </Group>
    </Group>
  );
};
