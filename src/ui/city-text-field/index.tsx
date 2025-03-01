"use client";

import { TextField, Label, Input } from "react-aria-components";

type Props = {
  onChange: (val: string) => void;
};

export const CityTextField = ({ onChange }: Props) => {
  return (
    <TextField onChange={onChange}>
      <Label>City</Label>
      <Input />
    </TextField>
  );
};
