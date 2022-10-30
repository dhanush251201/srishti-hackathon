import React from "react";

const Button = ({ handleClick, text, className }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleClick(e);
      }}
      className={`${className} bg-teal-400 text-teal-600 font-semibold text-lg w-full px-4 py-2 rounded-lg shadow-lg`}
    >
      {text}
    </button>
  );
};

export default Button;
