// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodoItem, onDelete} = props
  const {title, id} = eachTodoItem
  const onClickChange = () => {
    onDelete(id)
  }
  return (
    <li className="list-item">
      <div className="todo-container">
        <p className="para">{title}</p>
        <button onClick={onClickChange} className="button" type="button">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
