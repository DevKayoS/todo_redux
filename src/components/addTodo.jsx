import { UseDispatch, useDispatch } from "react-redux"
import { addTodo } from "../slices/todoSlice"
import { useState } from "react"

export function AddTodo() {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(input.trim() === "") return
    dispatch(addTodo(input))
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input value={input} onChange={(e) => setInput(e.target.value)} className="bg-zinc-900/50 rounded-md px-2 py-1 outline-none shadow-md shadow-black" type="text" placeholder="Adicione uma tarefa..." />
      <button className=" px-3 bg-zinc-900/50 text-zinc-400 hover:text-slate-50 hover:bg-zinc-900 rounded-md shadow-md shadow-black" type="submit">Enviar</button>
    </form>
  )
}