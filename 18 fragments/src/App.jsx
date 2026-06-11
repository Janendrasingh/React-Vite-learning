import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  //let foodItems = ["Dal", "Vegitable", "Fruits", "Roti","Milk", "Ghee"]
  let foodItems = []
  
  return (  
  <>     {/* <----- React Fragment also can we used <React.Fragment></React.Fragment>   */}                 
  <div><h1>Healthy food</h1></div>
  {foodItems.length === 0 ? <h3>I am still hungry.</h3> : null}  
  {/* Map Method */}

  <ul className="list-group">{foodItems.map((item) =>          
  <li className="list-group-item">{item}</li>)}
</ul>
</>)
    
}

export default App
