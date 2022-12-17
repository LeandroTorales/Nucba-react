import React from "react";
import GlobalStyles from "./globalStyles/GlobalStyles";
import ContadorComplejoComponent from "./components/contadorComplejo/ContadorComplejoComponent";
import SmallContainer from "./components/contadorComplejo/SmallContainer";
import HooksApiPeticion from "./components/peticionesApiHooks/HooksApiPeticion";
import GeneralContainer from "./components/reducer/GeneralContainer";
import ComponentExampleContexto from "./components/ComponentsExamples/ComponentExampleContexto";
import ReducerComponent from "./components/reducer/ReducerComponent";
import Contador from "./components/stateExample/Contador";

function App() {
  return (
    <>
      <GlobalStyles />
      {/*       <ComponentExampleContexto>
        <GeneralContainer>
          <ReducerComponent />
        </GeneralContainer>
      </ComponentExampleContexto> */}
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

      <GeneralContainer>
        {/* El SmallContainer es un componente que tiene la propiedad children que le ordena los componentes hijos con un display flex y un gap de 10px */}
        <SmallContainer>
          <HooksApiPeticion />
        </SmallContainer>
      </GeneralContainer>
    </>
  );
}

export default App;
