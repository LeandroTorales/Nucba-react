import React, { useContext } from "react";
import styled from "styled-components";
import { useReducer } from "react";
import { Contexto } from "../ComponentsExamples/ComponentExampleContexto";

const Title = styled.h1`
  color: black;
  font-size: 45px;
`;
const ButtonStyled = styled.button`
  color: white;
  padding: 5px 10px;
  width: 100px;
  height: 50px;
  border-radius: 25px;
  background-color: ${(props) => props.bc};
  cursor: pointer;
`;

const ReducerComponent = () => {
  const initialState = "grey";

  const { title, colorRed, colorGreen, colorBlue } = useContext(Contexto);

  const reducer = (state, action) => {
    switch (action.type) {
      case "rojo":
        return colorRed;
      case "verde":
        return colorGreen;
      case "azul":
        return colorBlue;
      default:
        return state;
    }
  };

  const [color, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Title color={color}>{title}</Title>
      <ButtonStyled bc={colorRed} onClick={() => dispatch({ type: "rojo" })}>
        Rojo
      </ButtonStyled>
      <ButtonStyled bc={colorGreen} onClick={() => dispatch({ type: "verde" })}>
        Verde
      </ButtonStyled>
      <ButtonStyled bc={colorBlue} onClick={() => dispatch({ type: "azul" })}>
        Azul
      </ButtonStyled>
    </>
  );
};

export default ReducerComponent;
