import { useState, useRef } from "react";
import { MdOutlineAddComment } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();


  const handleAddClick = (event) => {
    event.preventDefault();
    onNewItem(todoNameElement.current.value, dueDateElement.current.value);
    console.log(todoNameElement.current.value, dueDateElement.current.value);
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddClick}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-row">
            <MdOutlineAddComment />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
