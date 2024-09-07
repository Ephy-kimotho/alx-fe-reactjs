import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("Todo List renders correctly", () => {
  render(<TodoList />);

  const element = screen.getByText("Do home work");
  expect(element).toBeInTheDocument();
});

test("A new todo can be added", () => {
  render(<TodoList />);

  const input = screen.getByPlaceholderText("Enter a task...");
  const addBtn = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "Wash my shoes" } });
  fireEvent.click(addBtn);

  expect(screen.getByText("Wash my shoes")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter a task...").value).toBe("");
});

test("Toggling of a todo item onClick", () => {
  render(<TodoList />);

  const todo = screen.getByTestId("Clean the kitchen");
  const todoStatus = todo.querySelector("p");

  fireEvent.click(todo);
  expect(todoStatus).toHaveTextContent("Completed");

  fireEvent.click(todo);
  expect(todoStatus).toHaveTextContent("Not Completed");
});

test("A todo can be deleted", () => {
  render(<TodoList />);

  const todoToDelete = screen.getByTestId("Clean my room");
  const deleteButton = todoToDelete.nextElementSibling;
  fireEvent.click(deleteButton);
  expect(screen.queryByText("Clean my room")).not.toBeInTheDocument();
});
