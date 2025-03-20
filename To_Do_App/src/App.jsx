import { useState } from "react";
import "./App.css"; 

function App() {
    // todo cha array apne aap update hoga is liye   
  const [todos, setTodos] = useState([]);

  function addTodo() {
    const todoValue = document.getElementById("todo-input").value;
    if (!todoValue.trim()) return; 

    const newTodo = {
      title: todoValue,
      completed: false,
      id: Date.now(),
    };

    setTodos([...todos, newTodo]);
    document.getElementById("todo-input").value = ""; 
  }

  function deleteTodo(id) {
    const updatedArray = todos.filter((todo) => {
      return todo.id != id;
    });
    setTodos(updatedArray);
  }

  function done(id) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updatedTodos);
  }

  return (
    <>
      <h1>Todo App</h1>

      <div className="todos-input-wrapper">
        <input type="text" id="todo-input" placeholder="Enter your todo..." />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <div className="todos-wrapper">
        {todos.map((todo) => (
          <div key={todo.id} className="todo">
            <p className={todo.completed ? "completed" : ""}>{todo.title}</p>
            <button onClick={() => done(todo.id)}>
              {todo.completed ? "Undo" : "Mark as Done"}
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
