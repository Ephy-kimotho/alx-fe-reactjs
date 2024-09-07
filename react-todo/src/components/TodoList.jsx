import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Do home work", isCompleted: false },
    { id: 2, title: "Clean the kitchen", isCompleted: false },
    { id: 3, title: "Clean my room", isCompleted: false },
  ]);

  function addTodo(newTodo) {
    if (newTodo.title === "") {
      alert("Please enter a task");
      return;
    }
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  const todoElements = todos.map((todo) => (
    <Todo
      key={todo.id}
      title={todo.title}
      isCompleted={todo.isCompleted}
      toggleTodo={() => toggleTodo(todo.id)}
      deleteTodo={() => deleteTodo(todo.id)}
    />
  ));

  return (
    <section>
      <h2>WELCOME TO TODOO APP</h2>
      <AddTodoForm addTodo={addTodo} />
      {todoElements}
    </section>
  );
}

export default TodoList;
