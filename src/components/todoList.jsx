import {Trash2} from 'lucide-react'
import {   useSelector } from 'react-redux'

export function TodoList() {
  const {list} = useSelector((state) => state.todos)

  return (
    <div className="flex flex-col gap-2 ml-4 space-y-4">
      <div className="flex gap-2">
        <button className=" px-3 bg-zinc-900/50 text-zinc-400 hover:text-slate-50 hover:bg-zinc-900 rounded-md shadow-md shadow-black">Todas</button>
        <button className=" px-3 bg-zinc-900/50 text-zinc-400 hover:text-slate-50 hover:bg-zinc-900 rounded-md shadow-md shadow-black">Completas</button>
        <button className=" px-3 bg-zinc-900/50 text-zinc-400 hover:text-slate-50 hover:bg-zinc-900 rounded-md shadow-md shadow-black">Incompletas</button>
      </div>

      <ul>
        {list.map((todo)=> (
             <li key={todo.id} className='bg-zinc-900/50 rounded-md px-2 py-1 outline-none shadow-md shadow-black flex items-center justify-between mr-4 mb-2'>
              <span className='cursor-pointer'>{todo.text} </span>
              <button><Trash2 className='size-4'/></button>
             </li>
        ))}
      </ul>
    </div>
  )
}