import "./Style.css";
import { useState } from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { SlGameController } from "react-icons/sl";
import { FaImage } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import BoxInitialPage from "./BoxInitialPage";
import ColorPalette from "../../ColorPalette/ColorPalette";

const generateUniqueId = () => {
  return uuidv4();
};

export default function NoGames({ onAddGame }) {
  return (
    <div className="no-games-container">
      <BoxInitialPage>
        <InitialMessage />
      </BoxInitialPage>

      <BoxInitialPage>
        <FormInitialPage onAddGame={onAddGame} />
      </BoxInitialPage>
    </div>
  );
}

function InitialMessage() {
  return (
    <div className="initial-message">
      <h2>Welcome!</h2>
      <p>No games registered for now</p>
      <p>Click in Add Games to register your favorite games</p>
    </div>
  );
}

function FormInitialPage({ onAddGame }) {
  const [name, setName] = useState("");
  const [dev, setDev] = useState("");
  const [image, setImage] = useState("");
  const [platform, setPlatform] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("ffffff");
  const [textColor, setTextColor] = useState("black");

  function onSubmit(e) {
    e.preventDefault();
    if (!name || !dev) return;

    const newGame = {
      id: generateUniqueId(),
      name,
      developer: dev,
      image,
      platform,
      aditionDate: Date.now(),
      completed: false,
      textColor,
      backgroundColor,
    };

    onAddGame(newGame);
    setName("");
    setDev("");
    setImage("");
    setBackgroundColor("ffffff");
    setTextColor("black");
    console.log(newGame);
  }

  return (
    <div className="add-game-no-page">
      <form onSubmit={onSubmit}>
        <label> {<MdDriveFileRenameOutline />} Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label> {<FaCode />} Developer</label>
        <input
          type="text"
          value={dev}
          onChange={(e) => setDev(e.target.value)}
        />

        <label>{<SlGameController />} Platform</label>
        <input
          type="text"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        />

        <label> {<FaImage />} Game's image</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label>Text Color:</label>
        <ColorPalette onSelectColor={setTextColor} />
        <label>Background Color:</label>
        <ColorPalette onSelectColor={setBackgroundColor} />
        <label></label>
        <button className="add-button-no-page">Add Game</button>
      </form>
    </div>
  );
}
