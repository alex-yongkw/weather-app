"use client";

import { TextField, Label, Input } from "react-aria-components";
import styles from "./styles.module.css";
import { KeyboardEvent, useCallback } from "react";

type Props = {
  onChange: (val: string) => void;
  onEnterKeyDown: () => void;
};

export const CityTextField = ({ onChange, onEnterKeyDown }: Props) => {
  const handleEnterKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        onEnterKeyDown();
      }
    },
    [onEnterKeyDown]
  );

  return (
    <TextField
      className={styles.container}
      onChange={onChange}
      onKeyDown={handleEnterKeyDown}
    >
      <Label className={styles.label}>City</Label>
      <Input className={styles.input} />
    </TextField>
  );
};
