import Card from "react-bootstrap/Card";
import "./Style.css";
import Button from "../../../Button/Button";
import Form from "react-bootstrap/Form";
import CardOptions from "./CardOptions/CardOptions";
import GameDetails from "./GameDetails/GameDetails";
import { useKey } from "../../../../hooks/useKey";

function GameCard({
  game,
  onSelection,
  selectedGame,
  onRemove,
  onComplete,
  onEdit,
}) {
  const cardStyle = {
    margin: "10px",
    transition: "0.3s",
    boxShadow: "5px 5px 5px gray",
    width: "18rem",
    backgroundColor: game.backgroundColor,
    color: game.textColor,
  };

  useKey("Escape", () => onSelection(null));
  useKey("Delete", () => {
    if (isSelected) {
      onRemove(game);
    }
  });

  const isSelected = game.id === selectedGame?.id;
  return (
    <Card className={`card ${isSelected ? `selected` : ``}`} style={cardStyle}>
      {game.image && (
        <Card.Img variant="top" src={game.image} alt={`${game.name}'s Image`} />
      )}

      <Card.Body>
        <Card.Title>
          <strong>{game.name}</strong>
        </Card.Title>
      </Card.Body>

      {!isSelected && (
        <GameDetails developer={game.developer} platform={game.platform} />
      )}

      <Form.Check
        className="complete-button" // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Completed"
        checked={game.completed}
        onChange={() => onComplete(game)}
      />

      <Card.Body>
        <Button onClick={() => onSelection(game)}>
          {isSelected ? "Close Options" : "Open Options"}
        </Button>

        {isSelected && (
          <CardOptions game={game} onRemove={onRemove} onEdit={onEdit} />
        )}
      </Card.Body>
    </Card>
  );
}

export default GameCard;
