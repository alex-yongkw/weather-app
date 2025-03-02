import { Button } from "react-aria-components";
import { FaSearch } from "react-icons/fa";
import styles from "./styles.module.css";

type Props = {
  onClick: () => void;
};

export const SearchButton = ({ onClick }: Props) => {
  return (
    <Button onPress={onClick} className={styles.search}>
      <FaSearch className={styles.icon} color="#FFFFFF" />
    </Button>
  );
};
