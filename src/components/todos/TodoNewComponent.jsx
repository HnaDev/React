import { useState } from "react";

const TodoNewComponent = (props) => {
  // sd state
  const [valueInput, setValueInput] = useState()

  const {AddNewTodo} = props;

  const handleClick = () => {
    AddNewTodo(valueInput);
  }

  const handleChange = (event) => {
    setValueInput(event.target.value);
  }
  return (
    <div className="todo_box">
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
      <i>{valueInput} </i>
    </div>
  )
}
export default TodoNewComponent