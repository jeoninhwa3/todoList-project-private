import React, { useState } from 'react' // eslint-disable-line no-unused-vars
import TodoItem from './TodoItem'

const TodoList = ({ todos, setTodoData }) => {
	const listStyle = {display : 'grid', gridTemplateColumns: 'repeat(3, 1fr)', flexWrap: 'wrap', gap : '20px'}
	const removeItem = (id) => {
		setTodoData(todos.filter((todo) => todo.id !== id))
	}

	return (
		<>
			<div style={{marginTop : '30px'}}>
				<h2>Working!</h2>
				<ul style={listStyle}>
					{todos.map((todoItemData) => {
						return <TodoItem key={todoItemData.id} todos={todoItemData} removeItem={removeItem} />
					})}
				</ul>
			</div>
		</>
	)
}

export default TodoList