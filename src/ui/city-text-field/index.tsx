"use client";

import { TextField, Label, Input } from "react-aria-components";
import styles from "./styles.module.css";

type Props = {
  onChange: (val: string) => void;
};

export const CityTextField = ({ onChange }: Props) => {
  return (
    <TextField className={styles.container} onChange={onChange}>
      <Label className={styles.label}>City</Label>
      <Input className={styles.input} />
    </TextField>
  );
};
