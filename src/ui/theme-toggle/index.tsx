import { Button } from "react-aria-components";
import { FaPaintRoller } from "react-icons/fa";
import { useCallback } from "react";
import { useTheme } from "next-themes";
import styles from "./styles.module.css";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    switch (theme) {
      case "system": {
        setTheme("light");
        break;
      }

      case "light": {
        setTheme("dark");
        break;
      }
      case "dark": {
        setTheme("system");
        break;
      }
    }
  }, [theme, setTheme]);

  return (
    <Button onPress={toggleTheme} className={styles.container}>
      <FaPaintRoller size={14} color="rgba(0, 0, 0, 0.5)" />
    </Button>
  );
};
