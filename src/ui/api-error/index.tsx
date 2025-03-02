import { Text } from "react-aria-components";
import styles from "./styles.module.css";

type Props = {
  errorMessage: string;
};

export const ApiError = ({ errorMessage }: Props) => {
  return (
    <div className={styles.container}>
      <Text>{errorMessage}</Text>
    </div>
  );
};
