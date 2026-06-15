import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from './components/FoodItems';
import FoodInput from './components/FoodInput';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';

function App() {
  let foodItems = ["sabji", "Vegitable", "Fruits", "Roti","Milk", "Ghee"]
  //let foodItems = []
  
  return (  
  <>     {/* <----- React Fragment also can we used <React.Fragment></React.Fragment>   */}     
  <Container>
  <h1>Healthy food</h1>
  <ErrorMessage items={foodItems}></ErrorMessage>
  <FoodInput><input type="text" /></FoodInput>
  <FoodItems items={foodItems}></FoodItems>
  </Container>            
  {/* Map Method */}

  {/* <ul className="list-group">{foodItems.map((item) =>          
  <li className="list-group-item">{item}</li>)}
</ul> */}
</>)
    
}

export default App
