import styles from "./page.module.css";
import { WeatherSearchBar } from "@/components/weather-search-bar";
import {
  WeatherInfo,
  type Props as WeatherInfoProps,
} from "@/components/weather-info";
import { SearchHistory } from "@/components/search-history";

export default function Home() {
  const temperature: WeatherInfoProps["temperature"] = {
    current: 26,
    high: 29,
    low: 25,
  };

  const location: WeatherInfoProps["location"] = {
    city: "Johor",
    country: "MY",
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <WeatherSearchBar />
        <div className={styles.weatherAndSearchHistory}>
          <WeatherInfo
            temperature={temperature}
            location={location}
            date={new Date()}
            humidity={58}
            weather="Clouds"
          />
          <SearchHistory />
        </div>
      </main>
    </div>
  );
}
