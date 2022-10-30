import React, { useState } from "react";
import {
  AiFillExclamationCircle,
  AiFillEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

const Inputfield = ({
  valueState = ["", (v) => {}],
  errorState = ["", (v) => {}],
  placeholder = "",
  type = "text",
  title = "",
  isDisabled = false,
  className = "w-full",
}) => {
  const [value, setValue] = valueState;
  const [error, setError] = errorState;
  const [hide, setHide] = useState(true);

  return (
    <div
      className={`${className} flex flex-col items-start justify-center space-y-2`}
    >
      <label className="text-teal-600 text-base">{title}</label>
      <div className="flex space-x-2 items-center w-full">
        <input
          disabled={isDisabled}
          type={type === "password" ? (hide ? "password" : "text") : type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            e.preventDefault();
            setValue(e.target.value);
            setError("");
          }}
          className={` px-4 py-2 w-full rounded-lg text-slate bg-gray-200 bg-clip-padding bg-no-repeat border-2 border-solid ${
            error.length !== 0 ? "border-teal-400" : "border-gray-200"
          } first-letter:transition ease-in-out m-0 focus:outline-none focus:border-gray-200-400`}
        />
        {type === "password" && (
          <button
            className="text-gray-200-400 p-2 border-2 bg-gray-200 rounded-lg"
            onClick={(e) => {
              e.preventDefault();
              setHide(!hide);
            }}
          >
            {hide ? (
              <AiFillEye size={24} />
            ) : (
              <AiOutlineEyeInvisible size={24} />
            )}
          </button>
        )}
      </div>
      {error.length !== 0 && (
        <div className="flex items-center space-x-2 text-xs text-red">
          <AiFillExclamationCircle />
          <p className="">{error}</p>
        </div>
      )}
    </div>
  );
};

export default Inputfield;
