import "./Style.css";
export default function Stats({ games, isEmpty }) {
  const completedGames = games.filter((game) => game.completed === true);
  const percentage = (completedGames.length / games.length) * 100;
  return (
    <div className={`stats ${isEmpty && "empty"}`}>
      <p>
        {games.length === 0
          ? `Start Creating a list of your favorite games!`
          : `You added ${games.length} games | ${
              percentage === 0
                ? `You did not complete any of them until now!`
                : percentage === 100
                ? "you completed all your games! Congratulations!"
                : `You completed ${percentage.toFixed(2)}% of them!`
            }`}
      </p>
    </div>
  );
}
