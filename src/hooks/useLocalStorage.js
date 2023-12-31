import { useEffect } from "react";
import { useState } from "react";

export function useLocalStorage(key) {
  const [games, setGames] = useState(() => {
    const storagedValues = localStorage.getItem(key);
    return storagedValues ? JSON.parse(storagedValues) : [];
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(games));
  }, [games, key]);

  return [games, setGames];
}
