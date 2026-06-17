import { MdDeleteSweep } from "react-icons/md";

function TodoItem({todoName, todoDate, onDelete}) {

  return (
    <div>
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-row" onClick={() => onDelete(todoName)}>
            <MdDeleteSweep />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
