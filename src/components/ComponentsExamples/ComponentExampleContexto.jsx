import React, { createContext } from "react";

export const Contexto = createContext();

export const ComponentExampleContexto = ({ children }) => {
  return (
          <Contexto.Provider
        value={{
          title: "hola soy un contexto",
          colorRed: "red",
          colorGreen: "green",
          colorBlue: "blue",
        }}>
        {children}
      </Contexto.Provider>

  );
};

export default ComponentExampleContexto;
