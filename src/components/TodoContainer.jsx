import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const [todoData, setTodoData] = useState([
    {
      id: 1,
      isDone: false,
      title: "리액트 공부",
      content: "오늘 리액트 공부하기",
    },
    {
      id: 2,
      isDone: false,
      title: "learn react",
      content: "learn react today",
    },
  ]);

  const workingtodo = todoData.filter((todo) => !todo.isDone);
  const donetodo = todoData.filter((todo) => todo.isDone);

  return (
    <>
      <TodoForm todos={todoData} setTodoData={setTodoData} />
      <div>
        <TodoList
          title="Working!"
          todos={workingtodo}
          setTodoData={setTodoData}
        />
        <TodoList title="Done!" todos={donetodo} setTodoData={setTodoData} />
      </div>
    </>
  );
};

export default TodoContainer;
