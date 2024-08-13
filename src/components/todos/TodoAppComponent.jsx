
import '../todos/Todo.css';
import TodoNewComponent from './TodoNewComponent';
import TodoDataComponent from './TodoDataComponent';
import { useState } from 'react';
import logo from '../../assets/react.svg'

const TodoApp = () => {
    const [todoList, setTodoList] = useState([
    ])

    const addNewData = (value) => {
        const newData = {
            id: randomIntFromInterval(1, 100000),
            name: value
        }
        setTodoList([...todoList, newData])
    }
    const deleteId = (id) => {
        setTodoList(todoList.filter(item => item.id !== id));
    }
    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    return (
        <div className="todo">
            <div className="todo_title">
                <h2>TODO LIST</h2>
            </div>
            <TodoNewComponent addNewData={addNewData} />
            {todoList.length > 0 ?
                <TodoDataComponent todoList={todoList} deleteId={deleteId} />
                :
                <div className='logo_react'> <img src={logo} alt="" /></div>
            }
        </div>
    )
}
export default TodoApp