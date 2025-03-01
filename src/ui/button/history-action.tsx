"use client";

// TODO -- SSR

import { assertUnreachable } from "@/utils";
import { Button } from "react-aria-components";
import { FaSearch, FaTrash } from "react-icons/fa";

type Props = {
  type: "search" | "delete";
  onClick: () => void;
};

export const HistoryAction = ({ type, onClick }: Props) => {
  const getIcon = () => {
    const iconSize = 14;

    switch (type) {
      case "search":
        return <FaSearch size={iconSize} />;
      case "delete":
        return <FaTrash size={iconSize} />;
      default:
        assertUnreachable(type);
    }
  };
  return (
    <Button onPress={onClick} className="history-action">
      {getIcon()}
    </Button>
  );
};
