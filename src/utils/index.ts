export const assertUnreachable = (value: never): never => {
  throw new Error(
    `Statement should be unreachable. Unexpected value: ${value}}`
  );
};
