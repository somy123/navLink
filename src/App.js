import logo from "./logo.svg";
import "./App.css";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addTodoClick = () => {
    setTodoList([...todoList, { id: uuid(), todo: todo, ischecked: false }]);
    setTodo("");
  };
  const onTodoInputChange = (e) => {
    setTodo(e.target.value);
  };
  const deleteClicked = (id) => {
    const updatedtodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedtodoList);
    console.log(id, todoList);
  };
  const todoCheck = (id) => {
    const updatedtodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, ischecked: !todo.ischecked } : todo
    );
    setTodoList(updatedtodoList);
    console.log(todoList);
  };

  console.log(todoList);
  return (
    <div className="app">
      <h1>My Wishlist</h1>
      <div>
        <input
          value={todo}
          onChange={onTodoInputChange}
          placeholder="Add your wishlist here..."
        />
        <button onClick={() => addTodoClick(todo.id)}>Add</button>
      </div>
      <div>
        {todoList &&
          todoList.length > 0 &&
          todoList.map((todo) => {
            return (
              <div className={todo.ischecked ? "myclass" : ""} key={todo.id}>
                <label>
                  <input onChange={() => todoCheck(todo.id)} type="checkbox" />
                  <span>{todo.todo}</span>
                </label>
                <button onClick={() => deleteClicked(todo.id)}>delete</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
