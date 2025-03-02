import { Text } from "react-aria-components";
import styles from "./styles.module.css";

type Props = {
  message: string;
};

export const NoRecord = ({ message }: Props) => {
  return <Text className={styles.container}>{message}</Text>;
};
