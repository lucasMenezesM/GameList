import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import FormAddGame from "./FormAddGame/FormAddGame";
import CardList from "./CardList/CardList";
import Actions from "./Actions/Actions";
import NoGames from "./InitialPage/InitialPage";
import Stats from "./Stats/Stats";

export default function Main() {
  const [games, setGames] = useState([]);
  const isEmpty = games.length === 0;

  function handleAddGame(game) {
    setGames([...games, game]);
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
  }

  function handleClearGames() {
    const confirmed = window.confirm(
      "Are you sure you want to remove all games?"
    );
    if (confirmed) setGames([]);
  }

  function handleOrderGames(filter) {
    if (filter === "input") {
      return setGames(
        [...games].slice().sort((a, b) => a.aditionDate - b.aditionDate)
      );
    }

    if (filter === "name") {
      return setGames(
        games.slice().sort((a, b) => a.name.localeCompare(b.name))
      );
    }
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

          <Actions onOrder={handleOrderGames} onClear={handleClearGames} />
        </>
      ) : (
        <NoGames onAddGame={handleAddGame} />
      )}
      <Stats games={games} isEmpty={isEmpty} />
    </Container>
  );
}
