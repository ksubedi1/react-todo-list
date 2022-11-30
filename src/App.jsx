import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [toDoList, setToDoList] = useState([""]);
  const toDoListRef = useRef();

  return (
    <div>
      <input type="text" ref={toDoListRef}/>
      <button onClick={function () {
        setToDoList([...toDoList, 'toDOList'+ toDoList.length]);   
      }}>Add list</button>

      <ul>
        {toDoList.map(function (value, index) {
          return <li>{value}</li>
        })}
      </ul>

    </div>
   
  )
}

export default App
