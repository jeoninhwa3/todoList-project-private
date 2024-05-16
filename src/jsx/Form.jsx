import React, { useState } from 'react' // eslint-disable-line no-unused-vars

const TodoForm = ({ todos,  setTodoData}) => {
	const [newTitle, setNewTitle] = useState('')
	const [newContent, setNewContent] = useState('')

	const formStyle = {
		display: 'flex',
		padding: '20px',
		borderRadius : '10px',
		backgroundColor : '#eee',
	}
	const inputStyle = {
		padding: '10px',
		marginRight : '10px',
		border : 'none',
		borderRadius: '10px',
	}

	const addNewItem = (e) => {
		e.preventDefault();
		if (newTitle === '' || newContent === '') {
			alert('제목과 내용을 모두 입력하세요.');
			return;
		}
		setTodoData([...todos, {id : new Date().getTime(), title : newTitle, content: newContent, isDone : true}])
		setNewTitle('')
		setNewContent('')
	}
	return (
		<form style={formStyle} onSubmit={addNewItem}>
			<>
				<input style={inputStyle} value={newTitle} onChange={(e) => setNewTitle(e.target.value)} type="text" placeholder="제목" />
				<input style={inputStyle} value={newContent} onChange={(e) => setNewContent(e.target.value)} type="text" placeholder="내용" />
			</>   
			<button style={{backgroundColor : 'teal', color : '#fff', marginLeft: 'auto'}}>추가</button>
			</form>   
	)
}
export default TodoForm