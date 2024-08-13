
const TodoDataComponent = (props) => {
  const { todoList, deleteId } = props;
  
  const deleteTodo = (item) => {
    deleteId(item);
  }
  return (
    <div className="todo_data">
      {todoList.map((item, index) => {
        return (
          <div className={`data ${item.id}`} key={item.id}>
            <p>{item.name}</p>
            <button className="btn2" key={item.id} onClick={() => deleteTodo(item.id)}>delete</button>
          </div>
        )
      })}
    </div>
  )
}
export default TodoDataComponent