import sty from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input className={sty.display} 
    type="text"
    value={displayValue}
    readOnly />
  );
};

export default Display;
