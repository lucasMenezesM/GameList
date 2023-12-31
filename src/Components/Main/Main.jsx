import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import FormAddGame from "./FormAddGame/FormAddGame";
import CardList from "./CardList/CardList";
import Actions from "./Actions/Actions";
import NoGames from "./InitialPage/InitialPage";
import Stats from "./Stats/Stats";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useFilter } from "../../hooks/useFilter";

export default function Main() {
  const [filter, setFilter] = useState("default");
  const [games, setGames] = useLocalStorage("games");
  useFilter(filter, setGames);

  const isEmpty = games.length === 0;

  function handleAddGame(game) {
    setGames((games) => [...games, game]);
    setFilter("default");
  }

  function handleRemoveGame(removedGame) {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${removedGame.name} permanently?`
    );
    if (confirmed) setGames(games.filter((game) => game.id !== removedGame.id));
  }

  function handleCompleteGame(completedGame) {
    setGames(
      games.map((game) =>
        game.id === completedGame.id
          ? { ...game, completed: !completedGame.completed }
          : game
      )
    );
    setFilter("default");
  }

  function handleClearGames() {
    const confirmed = window.confirm(
      "Are you sure you want to remove all games?"
    );
    if (confirmed) setGames([]);
  }

  function handleEditCard(editedCard, newTextColor, newBackGroundColor) {
    setGames(
      games.map((game) =>
        game.id !== editedCard.id
          ? game
          : {
              ...game,
              textColor: newTextColor,
              backgroundColor: newBackGroundColor,
            }
      )
    );
  }

  return (
    <Container>
      <FormAddGame onAddGame={handleAddGame} games={games} />
      {!isEmpty ? (
        <>
          <CardList
            games={games}
            onRemove={handleRemoveGame}
            onComplete={handleCompleteGame}
            onEdit={handleEditCard}
          />

          <Actions
            onClear={handleClearGames}
            onSetFilter={setFilter}
            filter={filter}
          />
        </>
      ) : (
        <NoGames onAddGame={handleAddGame} />
      )}
      <Stats games={games} isEmpty={isEmpty} />
    </Container>
  );
}
