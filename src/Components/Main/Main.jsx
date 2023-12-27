import React, { useEffect } from "react";
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
  const [filter, setFilter] = useState("default");

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

  function handleOrderGames() {
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

  useEffect(
    function () {
      function orderGames() {
        if (filter === "default") return;

        if (filter === "input") {
          return setGames((games) =>
            [...games].slice().sort((a, b) => a.aditionDate - b.aditionDate)
          );
        }

        if (filter === "name") {
          return setGames((games) =>
            games.slice().sort((a, b) => a.name.localeCompare(b.name))
          );
        }

        if (filter === "completed") {
          return setGames((games) =>
            games.slice().sort((a, b) => b.completed - a.completed)
          );
        }

        if (filter === "uncompleted") {
          return setGames((games) =>
            games.slice().sort((a, b) => a.completed - b.completed)
          );
        }
      }
      orderGames();
    },

    [filter]
  );

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
            onOrder={handleOrderGames}
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
