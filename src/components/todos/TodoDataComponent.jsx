
const TodoDataComponent = (props) => {
  return (
    <div className="todo_data">
      <div className="data">
        <p>{JSON.stringify(props)}</p>
      </div>
    </div>
  )
}
export default TodoDataComponent