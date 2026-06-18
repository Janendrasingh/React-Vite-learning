import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import sty from "./WelcomeMsg.module.css";

const WelcomeMsg = () => {
  const todoItems = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && (
      <p className={sty.welcomeMsg}>
        Welcome to the Todo List
      </p>
    )
  );
};

export default WelcomeMsg;