import { createContext } from "react";
import { useReducer } from "react";


export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;

  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDueDate,
      },
    ];

    // newTodoItems = setTodoItems;
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName,
    );

    // setTodoItems(newTodoItem);
  }

  return newTodoItems;
};

const TodoItemContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const handleNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: { itemName, itemDueDate },
    };

    dispatchTodoItems(newItemAction);

    // setTodoItems((currValue) => [
    //   ...currValue,
    //   { name: itemName, dueDate: itemDueDate },
    // ]);
  };

  const handleDeleteItem = (itemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: { itemName },
    };

    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem: handleNewItem,
        deleteItem: handleDeleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemContextProvider;
