import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";

function App() {

const todoitems = [
    { name: 'Buy milk', dueDate: '12/07/26' },
    { name: 'Collage', dueDate: '13/07/26' },
    { name: 'Like', dueDate: '14/07/26' },

]

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoitems}/>
    </center>
  );
}

export default App;
