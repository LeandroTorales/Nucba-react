import React, { useReducer } from "react";
import styled from "styled-components";
import { TYPES } from "./ActionsReducer";

const DivContador = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 25px;
`;

const ContadorComplejoComponent = () => {
  const initialState = { count: 0 };

  const handleIncrement = () => dispatch({ type: TYPES.INCREMENT });
  const handleIncrement5 = () => dispatch({ type: TYPES.INCREMENT_5 });
  const handleDecrement = () => dispatch({ type: TYPES.DECREMENT });
  const handleDecrement5 = () => dispatch({ type: TYPES.DECREMENT_5 });
  const handleReset = () => dispatch({ type: TYPES.RESET });

  const reducer = (state, action) => {
    switch (action.type) {
      case TYPES.INCREMENT:
        return { ...state, count: state.count + 1 };

      case TYPES.INCREMENT_5:
        return { ...state, count: state.count + 5 };

      case TYPES.DECREMENT:
        return { ...state, count: state.count - 1 };

      case TYPES.DECREMENT_5:
        return { ...state, count: state.count - 5 };

      case TYPES.RESET:
        return initialState;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>Hooks useState</h2>
      <h3>{state.count}</h3>
      <DivContador>
        <button onClick={handleIncrement}>+ 1</button>
        <button onClick={handleIncrement5}>+ 5</button>
        <button onClick={handleReset}>R</button>
        <button onClick={handleDecrement5}>- 5</button>
        <button onClick={handleDecrement}>- 1</button>
      </DivContador>
    </>
  );
};

export default ContadorComplejoComponent;
