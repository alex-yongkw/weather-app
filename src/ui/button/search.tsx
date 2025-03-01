"use client";

// TODO -- SSR

import { Button } from "react-aria-components";
import { FaSearch } from "react-icons/fa";

type Props = {
  onClick: () => void;
};

export const SearchButton = ({ onClick }: Props) => {
  return (
    <Button onPress={onClick} className="search-weather">
      <FaSearch size={30} />
    </Button>
  );
};
