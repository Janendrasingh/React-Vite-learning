import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";

function App() {

const Initialtodoitems = [
    { name: 'Buy milk', dueDate: '12/07/26' },
    { name: 'Collage', dueDate: '13/07/26' },
    { name: 'Like', dueDate: '14/07/26' },
];

const [todoItems, setTodoItems] = useState(Initialtodoitems);

const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new item: ${itemName} Date: ${itemDueDate}` )
}

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem}/>
      <TodoItems todoItems={todoItems  }/>
    </center>
  );
}

export default App;
