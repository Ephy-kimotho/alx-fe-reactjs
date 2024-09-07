import { useState } from "react";

function AddTodoForm({ addTodo }) {
  const [todo, setTodo] = useState("");

  function handleChange(e) {
    setTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title: todo,
      isCompleted: false,
    };

    addTodo(newTodo);
    setTodo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={handleChange}
        placeholder="Enter a task..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
