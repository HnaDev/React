import { useState } from "react";

const TodoNewComponent = (props) => {
  const [valueInput, setValueInput] = useState('')

  const { addNewData } = props;
  const handleChange = (event) => {
    setValueInput(event.target.value)
  }


  const handleClick = () => {
    addNewData(valueInput)
    setValueInput("")
  }
  return (
    <div className="todo_box">
      <input type="text" onChange={handleChange} value={valueInput} />
      <button className="btn" onClick={handleClick}>Add</button>
      <i>{valueInput}</i>
    </div>
  )
}
export default TodoNewComponent