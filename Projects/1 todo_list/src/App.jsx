import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {


const [todoItems, setTodoItems] = useState([]);

const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new item: ${itemName} Date: ${itemDueDate}` )
    const newTodoItem = [...todoItems, { name: itemName, dueDate: itemDueDate }];
    setTodoItems(newTodoItem);
}

const handleDeleteItem = (itemName) => {
    const newTodoItem = todoItems.filter(item => item.name !== itemName);
    setTodoItems(newTodoItem);
}

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem}/>
      {todoItems.length === 0 && <WelcomeMsg/>}
      <TodoItems todoItems={todoItems} onDeleteItem={handleDeleteItem}/>
    </center>
  );
}

export default App;
