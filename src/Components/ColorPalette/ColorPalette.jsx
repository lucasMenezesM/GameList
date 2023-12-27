import { useState } from "react";

export default function ColorPalette({
  colors = [
    "#7bb8ff9e",
    "#465362",
    "#6cff529e",
    "#ff9e4f9e",
    "#7e4fff9e",
    "#0000009e",
    "white",
  ],
  onSelectColor,
  defaultSize = "16",
  selectedSize = "25",
}) {
  const [selectedColor, setSelectedColor] = useState(null);

  const containerColorStyle = {
    margin: "0 10px",
  };

  const colorStyle = {
    marginRight: "3px",
    cursor: "pointer",
  };

  function handleSelection(color) {
    onSelectColor((cur) => (cur !== color ? color : null));
    setSelectedColor((cur) => (cur !== color ? color : null));
  }

  return (
    <span style={containerColorStyle}>
      {colors.map((color, i) => {
        return (
          <span
            key={i}
            onClick={() => handleSelection(color)}
            style={colorStyle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={selectedColor === color ? selectedSize : defaultSize}
              width={selectedColor === color ? selectedSize : defaultSize}
              viewBox="0 0 448 512"
              fill={color}
            >
              <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z" />
            </svg>
          </span>
        );
      })}
    </span>
  );
}
