import React from 'react' // eslint-disable-line no-unused-vars

const TodoItem = ({todos, removeItem, completed}) => {
	const { id, isDone, title, content } = todos;

	const itemStyle = {padding: '25px 15px', border: '5px solid teal', borderRadius: '8px', overflow : 'hidden'}
	const buttonBox = {marginTop : '20px'}

	return (
		<>
			<li style={itemStyle}>
				<h2>{title}</h2>
				<p>{content}</p>
				<div style={buttonBox}>
					<button onClick={() => removeItem(id)} type="reset">삭제하기</button>
					<button>완료</button>
				</div>
			</li>
		</>
	)
}

export default TodoItem