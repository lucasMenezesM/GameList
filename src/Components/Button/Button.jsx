import React from "react";
import "./Style.css";

const Button = ({
  children,
  onClick,
  backgroundColor = "#5c6784",
  textColor = "white",
  className = "",
}) => {
  const buttonStyle = {
    borderRadius: "5px",
    backgroundColor: backgroundColor,
    color: textColor,
    border: "none",
    transition: "0.3s",
  };
  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      className={`buttonComponent ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
