"use client";

import { Text } from "react-aria-components";
import styles from "./styles.module.css";

// TODO -- SSR

type Props = {
  content: string;
};

export const InfoText = ({ content }: Props) => {
  return <Text className={styles.text}>{content}</Text>;
};
