import React, { useState } from 'react' // eslint-disable-line no-unused-vars
import TodoForm from './Form'
import TodoList from './TodoList'

const TodoContainer = () => {
  const [todoData, setTodoData] = useState([{
    id: 1,
    isDone: true,
    title: '리액트 공부',
    content: '오늘 리액트 공부하기',
  },
  {
    id: 2,
    isDone: true,
    title: 'learn react',
    content: 'learn react today',
  },
  ])

	return (
    <>
      <TodoForm todos={todoData} setTodoData={setTodoData} />
      <TodoList todos={todoData} setTodoData={setTodoData} />
    </>
	)
}

export default TodoContainer