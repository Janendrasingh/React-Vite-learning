import TodoItem  from "./TodoItem";

const TodoItems = ({todoItems, onDeleteItem}) => {
    return(<>
     <div className="items-container">
        {todoItems.map(item =><TodoItem 
        key ={item.name}
        todoName={item.name} todoDate={item.dueDate} onDelete={onDeleteItem} />)}
      </div>
    </>);
};

export default TodoItems;