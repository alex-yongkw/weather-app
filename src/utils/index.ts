export const assertUnreachable = (value: never): never => {
  throw new Error(
    `Statement should be unreachable. Unexpected value: ${value}}`
  );
};

export const formatDateTime = (date: Date): string => {
  const dayOfMonth = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const ampm = hour > 12 ? "pm" : "am";
  const hour12 = hour > 12 ? hour - 12 : hour;

  // pad 0 if less than 2 digit
  const dayOfMonthStr = `${dayOfMonth}`.padStart(2, "0");
  const monthStr = `${month}`.padStart(2, "0");
  const hourStr = `${hour12}`.padStart(2, "0");
  const minuteStr = `${minute}`.padStart(2, "0");

  return `${dayOfMonthStr}-${monthStr}-${year} ${hourStr}:${minuteStr}${ampm}`;
};
