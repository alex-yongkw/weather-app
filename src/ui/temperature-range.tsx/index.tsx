import { Group, Text } from "react-aria-components";
import styles from "./styles.module.css";

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
