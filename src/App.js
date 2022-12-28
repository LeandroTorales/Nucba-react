import React from "react";
import GlobalStyles from "./globalStyles/GlobalStyles";
import ContadorComplejoComponent from "./components/contadorComplejo/ContadorComplejoComponent";
import SmallContainer from "./components/contadorComplejo/SmallContainer";
import HooksApiPeticion from "./components/peticionesApiHooks/HooksApiPeticion";
import GeneralContainer from "./components/reducer/GeneralContainer";
import ComponentExampleContexto from "./components/ComponentsExamples/ComponentExampleContexto";
import ReducerComponent from "./components/reducer/ReducerComponent";
import Contador from "./components/stateExample/Contador";
import ClickTraker from "./components/ComponentsExamples/ClickTraker";

function App() {
  return (
    <>
      <GlobalStyles />
      <GeneralContainer>
        <ClickTraker />
      </GeneralContainer>
    </>
  );
}

export default App;
