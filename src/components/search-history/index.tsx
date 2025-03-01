"use client";

import { SearchHistoryRow } from "@/ui/search-history-row";
import { Group, Label } from "react-aria-components";
import styles from "./styles.module.css";

export const SearchHistory = () => {
  // TODO - replace with real data
  const searchHistory = [
    {
      id: 1,
      city: "Johor",
      country: "MY",
      date: new Date(),
      onSearch: () => {},
      onDelete: () => {},
    },
    {
      id: 2,
      city: "London",
      country: "UK",
      date: new Date(),
      onSearch: () => {},
      onDelete: () => {},
    },
  ];

  return (
    <Group className={styles.container}>
      <Label className={styles.label}>Search History</Label>
      <Group className={styles.historyList}>
        {searchHistory.map((search) => (
          <SearchHistoryRow
            key={search.id}
            city={search.city}
            country={search.country}
            date={search.date}
            onSearch={search.onSearch}
            onDelete={search.onDelete}
          />
        ))}
      </Group>
    </Group>
  );
};
