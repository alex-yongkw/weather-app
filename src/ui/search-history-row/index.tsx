"use client";

import { Group, Text } from "react-aria-components";
import { HistoryAction } from "../button/history-action";
import { formatDateTime } from "@/utils";

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
    <Group className="search-history-row">
      <Group className="text-group">
        <Text>{`${city}, ${country}`}</Text>
        <Text className="date-time">{formatDateTime(date)}</Text>
      </Group>
      <Group className="action-button-group">
        <HistoryAction type="search" onClick={onSearch} />
        <HistoryAction type="delete" onClick={onDelete} />
      </Group>
    </Group>
  );
};
