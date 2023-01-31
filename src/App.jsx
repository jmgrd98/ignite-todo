import { useState } from 'react'
import Todo from './components/Todo/Todo'
import './App.css'
import {AiFillRocket} from 'react-icons/ai'

function App() {

  const [todos, setTodos] = useState([])
  const [todoText, setTodoText] = useState('')
  const [inputText, setInputText] = useState('')
  const [totalTodos, setTotalTodos] = useState(0)
  const [checkedTodos, setCheckedTodos] = useState(0)

  function getInputText(e){
   setTodoText(e.target.value)
   setInputText(e.target.value)
  }

  function createTodo(){
    setTodos([...todos, todoText])
    setInputText('')
    setTotalTodos(totalTodos+1)
  }

  return (
    <div className="App">

    <div className="logo">
      <AiFillRocket className='rocketLogo' size={50}/>
      <h1><span>To</span>Do</h1>
    </div>

    <div className="search">
    <input
    onChange={getInputText}
    value={inputText}
    type="text" name="" id="" placeholder='Adicione uma nova tarefa'/>
    <button className='createBtn' onClick={createTodo}>Criar</button>
    </div>

    <main>

    <header>
      <div className="headerSection">
      <h2>Tarefas criadas</h2>
      <p>{totalTodos}</p>
      </div>

    <div className="headerSection">
      <span>Concluídas</span>
      <p>{checkedTodos} de {totalTodos}</p>
      </div>

      </header>

    <hr />

    </main>

    {todos.map(todo => {
    return (
    <Todo
    todoText={todo}
    />
    )}
  )
}

    </div>
  )
}

export default App
