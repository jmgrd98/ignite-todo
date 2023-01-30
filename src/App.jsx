import { useState } from 'react'
import Todo from './components/Todo/Todo'
import './App.css'
import {AiFillRocket} from 'react-icons/ai'

function App() {

  const [todos, setTodos] = useState([])
  const [todoText, setTodotext] = useState('')

  function getInputText(e){
   setTodotext(e.target.value)
  }

  function createTodo(){
    let todo = new Todo({
      text: todoText,
      check: todoCheck
    })
  }

  return (
    <div className="App">

    <div className="logo">
      <AiFillRocket className='rocketLogo' size={50}/>
      <h1><span>To</span>Do</h1>
    </div>

    <div className="search">
    <input onChange={getInputText} type="text" name="" id="" placeholder='Adicione uma nova tarefa'/>
    <button className='createBtn' onClick={createTodo}>Criar</button>
    </div>

    <main>

    <header>
      <div className="headerSection">
      <h2>Tarefas criadas</h2>
      <p>0</p>
      </div>

    <div className="headerSection">
      <span>Concluídas</span>
      <p>1 de 5</p>
      </div>

      </header>

    <hr />

    </main>

    <Todo
    todoText='Hello!'
    
    />

    </div>
  )
}

export default App
