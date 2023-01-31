import {React, useState} from 'react'
import { TodoStyle } from './style'
import {BsCheck2, BsFillTrashFill} from 'react-icons/bs'

export default function Todo({todoText, sendData}) {

    const [todoCheck, setTodoCheck] = useState(false)
    const [totalTodosChecked, setTotalTodosChecked] = useState(0)

function checkTodo(){
    setTodoCheck(true)
    setTotalTodosChecked(totalTodosChecked+1)
  }

  function sendData(){
    sendData(totalTodosChecked)
  }


  return (
    <TodoStyle>
        
        <button
        onClick={() => {checkTodo(); sendData();}}
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
