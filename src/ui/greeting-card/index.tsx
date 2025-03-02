import { Text } from "react-aria-components";
import styles from "./styles.module.css";

type Props = {
  message: string;
};

export const GreetingCard = ({ message }: Props) => {
  return (
    <div className={styles.container}>
      <Text>{message}</Text>
    </div>
  );
};
