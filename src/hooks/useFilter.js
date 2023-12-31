import { useEffect } from "react";

export function useFilter(filter, setValue) {
  useEffect(
    function orderGames() {
      if (filter === "default") return;

      if (filter === "input") {
        return setValue((games) =>
          [...games].slice().sort((a, b) => a.aditionDate - b.aditionDate)
        );
      }

      if (filter === "name") {
        return setValue((games) =>
          games.slice().sort((a, b) => a.name.localeCompare(b.name))
        );
      }

      if (filter === "completed") {
        return setValue((games) =>
          games.slice().sort((a, b) => b.completed - a.completed)
        );
      }

      if (filter === "uncompleted") {
        return setValue((games) =>
          games.slice().sort((a, b) => a.completed - b.completed)
        );
      }
    },

    [filter, setValue]
  );
}
