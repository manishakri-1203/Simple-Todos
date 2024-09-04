// Write your code here

import './index.css'

const TodoItem = props => {
  const {todosDetails, deleteTodo} = props
  const {title, id} = todosDetails

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="toods-item">
      <p className="title">{title}</p>
      <button type="button" className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
