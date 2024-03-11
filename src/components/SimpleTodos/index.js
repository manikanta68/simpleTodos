import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    edit: false,
    check: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    edit: false,
    check: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    edit: false,
    check: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    edit: false,
    check: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    edit: false,
    check: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    edit: false,
    check: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    edit: false,
    check: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    edit: false,
    check: false,
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todosList: initialTodosList, inputValue: ''}

  onDelete = id => {
    const {todosList} = this.state
    const filteredList = todosList.filter(
      eachTodoItem => eachTodoItem.id !== id,
    )
    this.setState({todosList: filteredList})
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  onAddTodo = () => {
    const {inputValue, todosList} = this.state
    const searchWord = inputValue.split(' ')
    const number = parseInt(searchWord[searchWord.length - 1])

    if (typeof number === 'number') {
      const newList = []
      let i = 1
      while (i <= number) {
        const newTodo = {
          id: todosList.length + i,
          title: inputValue.slice(0, inputValue.length - 1),
          edit: false,
          check: false,
        }
        newList.push(newTodo)
        i += 1
      }
      console.log(newList)
      this.setState(prevState => ({
        todosList: [...prevState.todosList, ...newList],
        inputValue: '',
      }))
    } else {
      const newTodo = {
        id: todosList.length + 1,
        title: inputValue,
        edit: false,
        check: false,
      }
      this.setState(prevState => ({
        todosList: [...prevState.todosList, newTodo],
        inputValue: '',
      }))
    }
  }

  editTextInput = id => {
    const {todosList} = this.state
    const modifiedList = todosList.map(each => {
      if (each.id === id) {
        return {...each, edit: !each.edit}
      }
      return each
    })
    this.setState({todosList: modifiedList})
  }

  editSave = (value, id) => {
    const {todosList} = this.state
    const modifiedList = todosList.map(each => {
      if (each.id === id) {
        return {...each, title: value}
      }
      return each
    })
    this.setState({todosList: modifiedList})
  }

  checkFunction = (value, id) => {
    const {todosList} = this.state
    const modifiedList = todosList.map(each => {
      if (each.id === id) {
        return {...each, check: value}
      }
      return each
    })
    this.setState({todosList: modifiedList})
  }

  render() {
    const {todosList, inputValue} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Simple Todos</h1>
          <div className="inputFiled">
            <input
              onChange={this.onChangeInput}
              value={inputValue}
              className="input"
              type="text"
            />
            <button
              onClick={this.onAddTodo}
              className="addButton"
              type="button"
            >
              Add
            </button>
          </div>
          <ul>
            {todosList.map(eachItem => (
              <TodoItem
                eachTodoItem={eachItem}
                key={eachItem.id}
                onDelete={this.onDelete}
                editTextInput={this.editTextInput}
                editSave={this.editSave}
                editSaveInput
                checkFunction={this.checkFunction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
