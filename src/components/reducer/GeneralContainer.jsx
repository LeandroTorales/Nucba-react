import React from "react";
import styled from "styled-components";

const ContainerReducer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 50vh;
  border: 2px solid black;
  gap: 10px;
`;

const GeneralContainer = ({ children }) => {
  return (
    <>
      <ContainerReducer>{children}</ContainerReducer>
    </>
  );
};

export default GeneralContainer;
