import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (itemName) => {
    const newTodoItem = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newTodoItem);
  };

  const defaultTodoItems = [
    { name: "Go to the gym", dueDate: "2024-06-30" },
    { name: "Buy groceries", dueDate: "2024-07-01" },
  ];

  return (
    <TodoItemsContext.Provider value={defaultTodoItems}>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        <WelcomeMsg />
        <TodoItems onDeleteItem={handleDeleteItem} />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
