import React, { useEffect, useState } from "react";
import ComponentPokemonContainer from "./ComponentPokemonContainer";
import { getDataApi } from "./GetDataApiFetch";

const HooksApiPeticion = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getDataApi();
  }, []);

  return (
    <>
      <h2>Peticiones Apis con hooks funcionales</h2>
      {/* Se crea un ternario para saber si hay pokemones, si no hay pokemones cargador se hace un h3 con cargando y se hace un map para renderizar un componente con su key, avatar y name */}

      {pokemons.length == 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemons.map((poke) => (
          <ComponentPokemonContainer
            key={poke.id}
            avatar={poke.avatar}
            name={poke.name}
          />
        ))
      )}
    </>
  );
};

export default HooksApiPeticion;
