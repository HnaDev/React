import './components/todos/Todo.css'
import TodoNewComponent from './components/todos/TodoNewComponent'
import TodoDataComponent from './components/todos/TodoDataComponent'
import { useState } from 'react'

const App = () => {
  const [todoList, setTodoList] = useState([
    {id: 1, name: "anhld"},
  ])
 
  // truyền function từ cha sang con
  const AddNewTodo = (name) =>{
    const newTodo = {
      id: randomIntFromInterval(1,100000),
      name:name
    }
    setTodoList([...todoList, newTodo]);
  }
  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return (
    <>
      <div className="todo">
        <div className="todo_title">
          <h2>TODO LIST</h2>
        </div>
        <TodoNewComponent AddNewTodo={AddNewTodo} />
        <TodoDataComponent todoList={todoList} />
      </div>
    </>
  )
}

export default App
