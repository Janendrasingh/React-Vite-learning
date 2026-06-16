import { useState } from "react";
import sty from "./App.module.css";
import ButtonContainer from "./components/buttonsContainer";
import Display from "./components/Display";

function App() {
  const [CalVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    console.log(buttonText);
  };

  return (
    <>
      <div className={sty.calculator}>
        <Display displayValue={CalVal} />
        <ButtonContainer onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
