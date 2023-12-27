import { useState } from "react";
import Button from "../../../../Button/Button";
import Card from "react-bootstrap/Card";
import ColorPalette from "../../../../ColorPalette/ColorPalette";
import "./Style.css";

export default function CardOptions({ game, onRemove, onEdit }) {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [textColor, setTextColor] = useState(game.textColor);
  const [backgroundColor, setBackgroundColor] = useState(game.backgroundColor);

  function handleEdition(game) {
    console.log("new text color defined: " + textColor);
    console.log("new background color defined: " + backgroundColor);

    onEdit(game, textColor, backgroundColor);
  }

  return (
    <div className="options">
      <Button className="cardOptions-button" onClick={() => onRemove(game)}>
        Remove Game
      </Button>
      <Button onClick={() => setIsPaletteOpen((cur) => !cur)}>
        {isPaletteOpen ? "Close Edition" : "Edit Card"}
      </Button>
      {isPaletteOpen && (
        <>
          <label>Change background color</label>
          <ColorPalette
            className="card-palette"
            onSelectColor={setBackgroundColor}
          />

          <label>Change text color: </label>
          <ColorPalette className="card-palette" onSelectColor={setTextColor} />

          <Button
            className="cardOptions-button"
            onClick={() => handleEdition(game)}
          >
            Save changes
          </Button>
        </>
      )}
      <Card.Link
        href={`https://www.google.com/search?q=${game.name}`}
        target="blank"
      >
        Search Game
      </Card.Link>
    </div>
  );
}
