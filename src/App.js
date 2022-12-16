import React from "react";
import ComponentExampleContexto from "./components/ComponentsExamples/ComponentExampleContexto";
import ContadorComplejoComponent from "./components/contadorComplejo/ContadorComplejoComponent";
import SmallContainer from "./components/contadorComplejo/SmallContainer";
import GeneralContainer from "./components/reducer/GeneralContainer";
import ReducerComponent from "./components/reducer/ReducerComponent";
import Contador from "./components/stateExample/Contador";
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
      {/*       <GeneralContainer>
        <SmallContainer>
          <Contador />
        </SmallContainer>
      </GeneralContainer> */}
      <GeneralContainer>
        <SmallContainer>
          <ContadorComplejoComponent />
        </SmallContainer>
      </GeneralContainer>
    </>
  );
}

export default App;
