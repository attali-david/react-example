import React, { useRef } from "react";

const Breed = ({ breed, clickHandler }) => {
  const focusRef = useRef<HTMLButtonElement>();

  return (
    <button
      ref={focusRef}
      name={breed.name}
      onClick={() => clickHandler(focusRef)}
    >
      {breed.name}
    </button>
  );
};

export default Breed;
