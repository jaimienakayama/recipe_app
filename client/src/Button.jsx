import React from "react";

const Button = ({ onClick, text, btnClass }) => {
  return (
    <button className={btnClass} onClick={() => onClick()}>
      {text === "Search" ? <i className="fas fa-search"></i> : text}
    </button>
  );
};

export default Button;
