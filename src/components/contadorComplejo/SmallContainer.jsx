import React from "react";
import styled from "styled-components";

const SmallWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const SmallContainer = ({ children }) => {
  return (
    <>
      <SmallWrapper>{children}</SmallWrapper>
    </>
  );
};

export default SmallContainer;
