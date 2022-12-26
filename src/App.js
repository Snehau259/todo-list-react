
import './App.css';
import { useState } from 'react'
// import Counter from './counter';

function App() {

  // const [state, setState] = useState(false)
  // function incrementCounter() {
  //   setCount(count + 1)
  //   console.log(count)

  // }
  // let details={title:'counter 1',count:0}


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
        <input type="text" placeholder="🖊️ Add item..." />
        <i className="fas fa-plus"></i>
      </div>
      <div className="todos">
        <div className="todo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p>React tutorial</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
