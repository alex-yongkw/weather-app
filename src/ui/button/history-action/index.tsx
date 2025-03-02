import { assertUnreachable } from "@/utils";
import { Button } from "react-aria-components";
import { FaSearch, FaTrash } from "react-icons/fa";
import styles from "./styles.module.css";
import { useMemo } from "react";

type Props = {
  type: "search" | "delete";
  onClick: () => void;
};

export const HistoryAction = ({ type, onClick }: Props) => {
  const icon = useMemo(() => {
    const iconSize = 14;
    const iconColor = "rgba(0, 0, 0, 0.5)";

    switch (type) {
      case "search":
        return <FaSearch size={iconSize} color={iconColor} />;
      case "delete":
        return <FaTrash size={iconSize} color={iconColor} />;
      default:
        assertUnreachable(type);
    }
  }, [type]);

  return (
    <Button onPress={onClick} className={styles.container}>
      {icon}
    </Button>
  );
};
