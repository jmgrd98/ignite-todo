import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {AiFillRocket} from 'react-icons/ai'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

    <div className="logo">
      <AiFillRocket className='rocketLogo' size={50}/>
      <h1><span>To</span>Do</h1>
    </div>

    <div className="search">
    <input type="text" name="" id="" placeholder='Adicione uma nova tarefa'/>
    <button type='click'>Criar</button>
    </div>

    <main>

    <header>
      <div className="createdTodos">
      <h2>Tarefas criadas</h2>
      <p>0</p>
      </div>

    <div className="completedTodos">
      <h2>Concluídas</h2>
      <p>1 de 5</p>
      </div>

      </header>
      
    <hr />

    </main>

    </div>
  )
}

export default App
