import { useState } from "react";
import GameCard from "./Card/GameCard";
import "./Style.css";
export default function CardList({ games, onRemove, onComplete, onEdit }) {
  const [selectedGame, setSelectedGame] = useState(null);

  function handleSelection(gameSelected) {
    setSelectedGame((game) =>
      game?.id === gameSelected?.id ? null : gameSelected
    );
  }

  return (
    <>
      <div className="cards-container">
        {games.map((game) => {
          return (
            <GameCard
              key={game.id}
              game={game}
              onSelection={handleSelection}
              selectedGame={selectedGame}
              onRemove={onRemove}
              onComplete={onComplete}
              onEdit={onEdit}
            />
          );
        })}
      </div>
    </>
  );
}
