import { assertUnreachable } from "@/utils";
import Image from "next/image";
import { useMemo } from "react";
import styles from "./styles.module.css";

type Props = {
  condition: "sun" | "cloud";
};

export const WeatherImage = ({ condition }: Props) => {
  const sunImageUrl = "/sun.png";
  const cloudImageUrl = "/cloud.png";

  const weatherCondition = useMemo(() => {
    switch (condition) {
      case "sun":
        return sunImageUrl;
      case "cloud":
        return cloudImageUrl;
      default:
        assertUnreachable(condition);
        return "";
    }
  }, [condition]);

  return (
    <Image
      className={styles.weatherLogo}
      src={weatherCondition}
      alt="weather condition"
      width={300}
      height={300}
    />
  );
};
