// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodoItem, onDelete, editTextInput, editSave, checkFunction} = props
  const {title, id, edit, check} = eachTodoItem
  const onClickChange = () => {
    onDelete(id)
  }

  const onEditFunction = () => {
    editTextInput(id)
  }

  const onSaveChange = event => {
    editSave(event.target.value, id)
  }

  const onCheck = event => {
    checkFunction(event.target.checked, id)
  }

  return (
    <li className="list-item">
      <div className="todo-container">
        <div className="checkWithPara">
          <input onChange={onCheck} type="checkbox" />
          {edit ? (
            <input
              onChange={onSaveChange}
              className="editableTextInput"
              value={title}
            />
          ) : (
            <p className={check ? 'para textDecoration' : 'para'}>{title}</p>
          )}
        </div>

        <div>
          <button
            onClick={onEditFunction}
            className={edit ? 'editAndSaveButton extra' : 'editAndSaveButton'}
            type="button"
          >
            {edit ? 'Save' : 'Edit'}
          </button>
          <button onClick={onClickChange} className="button" type="button">
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoItem
