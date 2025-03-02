"use client";

import { Group, Text } from "react-aria-components";
import styles from "./styles.module.css";

// TODO -- SSR

type Props = {
  high: number;
  low: number;
};

export const TemperatureRange = ({ high, low }: Props) => {
  return (
    <Group className={styles.container}>
      <Text>{`H: ${high}°`}</Text>
      <Text>{`L: ${low}°`}</Text>
    </Group>
  );
};
