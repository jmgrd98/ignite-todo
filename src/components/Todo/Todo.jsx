import React from 'react'
import { TodoStyle } from './style'

export default function Todo({todoText,}) {

    // const [todoCheck, setTodoCheck] = useState(false)


function checkTodo(){
    setTodoCheck(true)
  }


  return (
    <TodoStyle>
        
        <button className='checkBtn'></button>
        <p>{todoText}</p>
        <button className='trashBtn'></button>

    </TodoStyle>
  )
}
