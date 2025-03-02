import Dexie, { type EntityTable } from "dexie";

interface SearchRecord {
  id: number;
  location: {
    city: string;
    country: string;
    lat: number;
    lon: number;
  };
  timestamp: Date;
}

// for insert operation (without id field)
export type InsertType = Omit<SearchRecord, "id">;

const db = new Dexie("WeatherSearchHistoryDatabase") as Dexie & {
  searchHistory: EntityTable<
    SearchRecord,
    "id" // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  searchHistory: "++id", // primary key "id" (for the runtime!)
});

export const addToSearchHistory = async (searchHistory: InsertType) => {
  try {
    const id = await db.searchHistory.add(searchHistory);

    return id;
  } catch (err) {
    // TODO -- maybe sent error to monitoring tool like Sentry.js
    console.error(err);
  }
};

export const getLatestTenRecord = async () => {
  try {
    const id = await db.searchHistory.reverse().limit(4).toArray();

    return id;
  } catch (err) {
    // TODO -- maybe sent error to monitoring tool like Sentry.js
    console.error(err);
  }
};

export type { SearchRecord };
