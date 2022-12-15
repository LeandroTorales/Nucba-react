import React from "react";
import ComponentExampleContexto from "./components/ComponentsExamples/ComponentExampleContexto";
import GeneralContainer from "./components/reducer/GeneralContainer";
import ReducerComponent from "./components/reducer/Reducer";
import GlobalStyles from "./globalStyles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <ComponentExampleContexto>
        <GeneralContainer>
          <ReducerComponent />
        </GeneralContainer>
      </ComponentExampleContexto>
    </>
  );
}

export default App;
