"use server";

export type Coordinate = {
  lat: number;
  lon: number;
};

// based on API response shape, only needed field is typed.
type ApiLocationCoordinate = {
  name: string;
  country: string;
  lat: number;
  lon: number;
};

// based on API response shape, only needed field is typed.
type ApiWeatherInfo = {
  coord: Coordinate;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  dt: number; // unix timestamp
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  name: string;
  cod: 200;
};

type ApiError = {
  cod: string;
  message: string;
};

export type WeatherInfo = {
  temperature: {
    current: number;
    high: number;
    low: number;
  };
  location: {
    city: string;
    country: string;
    coordinate: {
      lat: number;
      lon: number;
    };
  };
  timestamp: Date;
  humidity: number;
  condition: string;
};

export type ErrorResponse = {
  error: string;
};

const fetchCoordinate = async (
  city: string
): Promise<ApiLocationCoordinate[]> => {
  const apiKey = process.env.OPEN_WEATHER_API_KEY;

  // get lat lon coordinate from open weather geocoding API.
  const coordinateResponse = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q={${city}}&limit=1&appid=${apiKey}`
  );

  const locationCoordinate = await coordinateResponse.json();

  return locationCoordinate;
};

const fetchWeatherInfo = async (
  lat: number,
  lon: number
): Promise<ApiWeatherInfo | ApiError> => {
  const apiKey = process.env.OPEN_WEATHER_API_KEY;

  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  );

  const weatherInfo = await weatherResponse.json();

  return weatherInfo;
};

// typescript type guard
function isSuccessResponse(
  res: ApiWeatherInfo | ApiError
): res is ApiWeatherInfo {
  return (res as ApiWeatherInfo).cod === 200;
}

// TODO -- code flow is a bit messy, please improve.
export const getWeather = async (
  city: string,
  country?: string
): Promise<WeatherInfo | ErrorResponse> => {
  try {
    const locationCoordinate = await fetchCoordinate(city);

    // early return
    if (locationCoordinate.length === 0) {
      return {
        error: "Not Found. Please search for another city/country.",
      };
    }

    const { lat, lon } = locationCoordinate.at(0)!;

    const weatherInfo = await fetchWeatherInfo(lat, lon);

    if (isSuccessResponse(weatherInfo)) {
      // success
      return {
        temperature: {
          current: Math.round(weatherInfo.main.temp),
          high: Math.round(weatherInfo.main.temp_max),
          low: Math.round(weatherInfo.main.temp_min),
        },
        location: {
          city: weatherInfo.name,
          country: weatherInfo.sys.country,
          coordinate: {
            lat: weatherInfo.coord.lat,
            lon: weatherInfo.coord.lon,
          },
        },
        timestamp: new Date(weatherInfo.dt * 1000), // convert unix timestamp to js Date object
        humidity: weatherInfo.main.humidity,
        condition: weatherInfo.weather[0].main,
      };
    } else {
      return {
        error: weatherInfo.message,
      };
    }
  } catch (err) {
    // handle unexpected error (eg, network, server issue etc)
    if (err instanceof Error) {
      return {
        error: err.message,
      };
    } else {
      return {
        error: "Unknown error occure.",
      };
    }
  }
};

export const getWeatherByCoordinate = async (
  coordinate: Coordinate
): Promise<WeatherInfo | ErrorResponse> => {
  try {
    const { lat, lon } = coordinate;

    const weatherInfo = await fetchWeatherInfo(lat, lon);

    if (isSuccessResponse(weatherInfo)) {
      // success
      return {
        temperature: {
          current: Math.round(weatherInfo.main.temp),
          high: Math.round(weatherInfo.main.temp_max),
          low: Math.round(weatherInfo.main.temp_min),
        },
        location: {
          city: weatherInfo.name,
          country: weatherInfo.sys.country,
          coordinate: {
            lat: weatherInfo.coord.lat,
            lon: weatherInfo.coord.lon,
          },
        },
        timestamp: new Date(weatherInfo.dt * 1000), // convert unix timestamp to js Date object
        humidity: weatherInfo.main.humidity,
        condition: weatherInfo.weather[0].main,
      };
    } else {
      return {
        error: weatherInfo.message,
      };
    }
  } catch (err) {
    // handle unexpected error (eg, network, server issue etc)
    if (err instanceof Error) {
      return {
        error: err.message,
      };
    } else {
      return {
        error: "Unknown error occure.",
      };
    }
  }
};
