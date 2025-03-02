import { assertUnreachable } from "@/utils";
import { useMemo } from "react";
import { Text } from "react-aria-components";
import styles from "./styles.module.css";

type Props = {
  city: string;
  country: string;
  color?: "black" | "grey";
  bold?: true;
};

export const LocationText = ({ city, country, color, bold }: Props) => {
  const textColor = useMemo(() => {
    const black = "rgba(0, 0, 0, 1)";
    const grey = "rgba(102, 102, 102, 1)";

    if (!color) {
      return black;
    }

    switch (color) {
      case "black":
        return black;
      case "grey":
        return grey;
      default:
        assertUnreachable(color);
    }
  }, [color]);

  const textWeight = useMemo(() => (bold ? "700" : "400"), [bold]);

  const style = useMemo(
    () => ({
      color: textColor,
      fontWeight: textWeight,
    }),
    [textColor, textWeight]
  );

  return (
    <Text style={style} className={styles.text}>{`${city}, ${country}`}</Text>
  );
};
