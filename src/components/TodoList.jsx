import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodoData, title }) => {
  const listStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    flexWrap: "wrap",
    gap: "20px",
  };

  const removeItem = (id) => {
    setTodoData((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    console.log(id);
    setTodoData((prev) => {
      return prev.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      });
    });
  };

  return (
    <>
      <div style={{ marginTop: "30px" }}>
        <h2>{title}</h2>
        <ul style={listStyle}>
          {todos.map((todoItemData) => {
            return (
              <TodoItem
                key={todoItemData.id}
                todos={todoItemData}
                removeItem={removeItem}
                setTodoData={setTodoData}
                toggleTodo={toggleTodo}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
