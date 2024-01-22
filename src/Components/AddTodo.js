import React  ,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodos } from '../Redux-Reducers'

function AddTodo() {

    const [ todo , setTodo] = useState('')

    const dispatch = useDispatch()

     const handleSubmit = (e) =>{
        e.preventDefault()

        if(todo !== ''){
            dispatch(addTodos(todo))
            setTodo('')
        }
    }

  return (
    <div className='inputBox'>
    <h1>To Do list</h1>
    <div>
        <form onSubmit={handleSubmit} >
            <input id='todo' placeholder='Input task here ' type="text" value={todo} onChange={(e) => {setTodo(e.target.value)}} autoComplete="off"  />
            <button id='submit' type='submit'> Add </button>
        </form>
    </div>
    </div>
  )
}

export default AddTodo