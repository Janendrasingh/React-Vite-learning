import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import "./App.css";
import { useState } from "react";
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

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem: handleNewItem,
        deleteItem: handleDeleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMsg />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
