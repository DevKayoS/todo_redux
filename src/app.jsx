import { AddTodo } from "./components/addTodo";
import { TodoList } from "./components/todoList";

export function App() {


  return (
    <div className="flex flex-col items-center justify-center mt-20 w-96 text-slate-50 m-auto">
      
      <div className="flex flex-col  shadow-lg shadow-black w-[700px] min-h-96 rounded-md bg-zinc-900/50">
      <div className="   h-32 rounded-md  p-3 space-y-5">
        <h1 className="text-xl">
          Lista de tarefa com Redux:
        </h1>
        <AddTodo/>
        <div className="h-px bg-slate-400 w-full"/> 
      </div>
     
      <TodoList/>
      </div>
    </div>
  )
}

