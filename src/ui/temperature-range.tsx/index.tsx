"use client";

import { Group, Text } from "react-aria-components";

// TODO -- SSR

type Props = {
  high: number;
  low: number;
};

export const TemperatureRange = ({ high, low }: Props) => {
  return (
    <Group className="temperature-range">
      <Text>{`H: ${high}°`}</Text>
      <Text>{`L: ${high}°`}</Text>
    </Group>
  );
};
