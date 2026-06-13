import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';

function App() {
  let foodItems = ["sabji", "Vegitable", "Fruits", "Roti","Milk", "Ghee"]
  //let foodItems = []
  
  return (  
  <>     {/* <----- React Fragment also can we used <React.Fragment></React.Fragment>   */}                 
  <h1>Healthy food</h1>
  <ErrorMessage items={foodItems}></ErrorMessage>
  <FoodItems items={foodItems}></FoodItems>
  {/* Map Method */}

  {/* <ul className="list-group">{foodItems.map((item) =>          
  <li className="list-group-item">{item}</li>)}
</ul> */}
</>)
    
}

export default App
