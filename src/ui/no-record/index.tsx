"use client";

import { Group, Text } from "react-aria-components";
import { HistoryAction } from "../button/history-action";
import { formatDateTime } from "@/utils";
import styles from "./styles.module.css";

type Props = {
  message: string;
};

export const NoRecord = ({ message }: Props) => {
  return <Text className={styles.container}>{message}</Text>;
};
