
import './App.css';
import { useState } from 'react'


function App() {

  const [todoList, setTodoList] = useState([])
  const [todo, setTodo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>

      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>

      <div className="input">
        <input type="text" onChange={(e) => setTodo(e.target.value)} placeholder="🖊️ Add item..." />
        <i className="fas fa-plus" onClick={() => setTodoList([...todoList, { id: Date.now(), status: false, text: todo }])}></i>
      </div>

      {console.log(todoList)}
      <div className="todos">
        {todoList.map((item) => {
          return (
            <div className="todo">
              <div className="left">
                <input type="checkbox" name="" id="" onChange={(e) => {
                  console.log(item)
                  console.log(e.target.checked)
                  setTodoList(todoList.filter(todoItem => {
                    if (todoItem.id === item.id) {
                      item.status = e.target.checked
                    }
                    return todoItem
                  }))

                }} value={item.status} />
                <p>{item.text}</p>
              </div>

              <div className="right">
                <i className="fas fa-times"></i>
              </div>

            </div>)
        })
        }
        {
          todoList.map((item => {
            if (item.status) {
              return (<h1>{item.text}</h1>)
            }
          }))
        }

      </div>

    </div>
  );
}

export default App;
