import React, { useEffect, useState } from "react";
import Div from "./Div";

const ClickTraker = () => {
  const [click, setClick] = useState(false);

  useEffect(() => {
    console.log(click);
  }, [click]);

  return (
    <>
      <p>cantidad de click: {click}</p>
      <button onClick={() => setClick(!click)}>Click</button>
      <Div
        click={click}
      />
    </>
  );
};

export default ClickTraker;
