import {React, useState} from 'react'
import { TodoStyle } from './style'

export default function Todo({todoText,}) {

    const [todoCheck, setTodoCheck] = useState(false)


function checkTodo(){
    setTodoCheck(true)
  }


  return (
    <TodoStyle>
        
        <button onClick={checkTodo} className={todoCheck ? 'checkBtnActive' : 'checkBtn'}></button>
        <p>{todoText}</p>
        <button className='trashBtn'></button>

    </TodoStyle>
  )
}
