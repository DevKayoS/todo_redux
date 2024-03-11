import {Trash2} from 'lucide-react'
import {useSelector, useDispatch } from 'react-redux'
import { toggleTodo, removeTodo, filterTodo } from '../slices/todoSlice';

export function TodoList() {
  const {list, filter} = useSelector((state) => state.todos)

  const dispatch = useDispatch();

  const filteredList = list.filter((todo)=> {
    if(filter === "all") return true
    if(filter === "completed") return todo.completed
    if(filter === "incompleted") return !todo.completed
    return true
  })

  return (
    <div className="flex flex-col gap-2 ml-4 space-y-4">
      <div className="flex gap-2">
        <button onClick={() => dispatch(filterTodo("all"))} className=" px-3 bg-zinc-900/50 text-zinc-400 hover:text-slate-50 hover:bg-zinc-900 rounded-md shadow-md shadow-black">Todas</button>
        <button onClick={() => dispatch(filterTodo("completed"))} className=" px-3 bg-zinc-900/50 text-zinc-400 hover:text-slate-50 hover:bg-zinc-900 rounded-md shadow-md shadow-black">Completas</button>
        <button onClick={() => dispatch(filterTodo("incompleted"))} className=" px-3 bg-zinc-900/50 text-zinc-400 hover:text-slate-50 hover:bg-zinc-900 rounded-md shadow-md shadow-black">Incompletas</button>
      </div>

      <ul>
        {filteredList.map((todo)=> (
          <li key={todo.id} className='bg-zinc-900/50 rounded-md px-2 py-1 cursor-pointer outline-none shadow-md shadow-black flex items-center justify-between mr-4 mb-2'>
          <span onClick={() => dispatch(toggleTodo(todo.id))} className={todo.completed ? 'line-through text-slate-400' : null}>{todo.text} </span>
          <button onClick={() => dispatch(removeTodo(todo.id))}><Trash2 className='size-4'/></button>
         </li>
        ))}
      </ul>
    </div>
  )
}