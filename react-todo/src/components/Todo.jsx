function Todo({ title, isCompleted, toggleTodo, deleteTodo }) {
  return (
    <article>
      <div onClick={toggleTodo} data-testid={title}>
        <h3>{title}</h3>
        <p>{isCompleted ? "Completed" : "Not Completed"}</p>
      </div>
      <button onClick={deleteTodo}>Delete</button>
    </article>
  );
}

export default Todo;
