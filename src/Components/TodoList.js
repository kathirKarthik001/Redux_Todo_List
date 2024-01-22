import React  from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { delTodos , CompTodos } from '../Redux-Reducers'

function TodoList() {

    const todos = useSelector( (state ) => state.todos)     // selecting todos from the state
    const dispatch = useDispatch();

  return (
    <div className='todolist'>
    <h3>Todos</h3>
    <div >
        {todos.map( (todo) => 
        <div className='todo' key={todo.id}>
            <div>
            <input type="checkbox"  id='done'  onClick={()=> dispatch(CompTodos(todo.id))} />
            {todo.text}
            </div>
        
            <button onClick={(e)=>{dispatch(delTodos(todo.id))}}>&#10006;</button>

        </div> )}
    </div>
    </div>
  )
}

export default TodoList