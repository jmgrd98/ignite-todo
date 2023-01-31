import {React, useState} from 'react'
import { TodoStyle } from './style'
import {BsCheck2, BsFillTrashFill} from 'react-icons/bs'

export default function Todo({todoText,}) {

    const [todoCheck, setTodoCheck] = useState(false)
    const [totalTodos, setTotalTodos] = useState(0)
    const [checkedTodos, setCheckedTodos] = useState(0)

function checkTodo(){
    setTodoCheck(true)
  }


  return (
    <TodoStyle>
        
        <button
        onClick={checkTodo}
        className={todoCheck ? 'checkBtnActive' : 'checkBtn'}>
        {todoCheck ? <BsCheck2 className='checkIcon'/> : null}
        </button>
        <p>{todoText}</p>
        <button className='trashBtn'>
            <BsFillTrashFill/>
        </button>

    </TodoStyle>
  )
}
