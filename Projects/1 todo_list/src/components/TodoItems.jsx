import { TodoItemsContext } from "../store/todo-items-store";
import {useContext} from "react";
import TodoItem  from "./TodoItem";

const TodoItems = ({onDeleteItem}) => {
    const todoItems = useContext(TodoItemsContext);
    console.log(todoItems);

    return(<>
     <div className="items-container">
        {todoItems.map(item =><TodoItem 
        key ={item.name}
        todoName={item.name} todoDate={item.dueDate} onDelete={onDeleteItem} />)}
      </div>
    </>);
};

export default TodoItems;