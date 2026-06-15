import sty from "./FoodInput.module.css";

const FoodInput = () => {

    const handelOnChange = (event) => {console.log(event.target.value)}


    return <input type="text" placeholder="Enter the item here" 
    className={sty.FoodInput}
    onChange ={handelOnChange}
    ></input>
}

export default FoodInput;