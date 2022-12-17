import React from "react";

const ComponentPokemonContainer = ({ avatar, name }) => {
  return (
    <>
      <figure>
        <img src={avatar} alt={name} />
        <span>{name}</span>
      </figure>
    </>
  );
};

export default ComponentPokemonContainer;
