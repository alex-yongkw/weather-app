"use client";

import { Group, Text } from "react-aria-components";
import { HistoryAction } from "../button/history-action";
import { formatDateTime } from "@/utils";
import styles from "./styles.module.css";

type Props = {
  city: string;
  country: string;
  date: Date;
  onSearch: () => void;
  onDelete: () => void;
};

export const SearchHistoryRow = ({
  city,
  country,
  date,
  onSearch,
  onDelete,
}: Props) => {
  return (
    <Group className={styles.container}>
      <Group className={styles.locationAndDateTimeContainer}>
        <Text>{`${city}, ${country}`}</Text>
        <Text className={styles.dateAndTime}>{formatDateTime(date)}</Text>
      </Group>
      <Group className={styles.actionButtonGroup}>
        <HistoryAction type="search" onClick={onSearch} />
        <HistoryAction type="delete" onClick={onDelete} />
      </Group>
    </Group>
  );
};
