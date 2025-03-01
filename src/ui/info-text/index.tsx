"use client";

import { Text } from "react-aria-components";

// TODO -- SSR

type Props = {
  content: string;
};

export const InfoText = ({ content }: Props) => {
  return <Text className="info-text">{content}</Text>;
};
