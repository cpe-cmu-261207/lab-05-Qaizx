import {useState} from 'react'
import Todo from "./Todo"
import TodoDone from "./TodoDone"


type TaskData = {
    id : number;
    name: string;
}

type TaskDone = {
    name: string;
}

const TaskInput = () => {
    const [tasks, setTasks] = useState<TaskData[]>([])
    const [tasksDone, setTasksDone] = useState<TaskDone[]>([])
    
    

    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        var inputTask = document.querySelector('input')
        if(ev.keyCode == 13){
          if(inputTask?.value == '') alert("Need Input")
          else {
            const newId = (new Date()).getTime()
            const newTasks = [...tasks, {id: newId, name: String(inputTask?.value)}]
            setTasks(newTasks)
          }
        }
    }

    const AddTask = () => {
        var inputTask = document.querySelector('input')
        if(inputTask?.value == '') alert("Need Input")
          else {
            const newId = (new Date()).getTime()
            const newTasks = [...tasks, {id: newId, name: String(inputTask?.value)}]
            setTasks(newTasks)
          }
        
    }

    const deleteTask = (id: number) => {
        const newTasks = tasks.filter(x => x.id !== id)
        setTasks(newTasks)
    }

    const doneTask = (id: number, name: String) => {
        const newTasks = tasks.filter(x => x.id !== id)
        setTasks(newTasks)

        const newTasksDone = [...tasksDone, {name: String(name)}]
        setTasksDone(newTasksDone)
    }
    
    return (

        <div className='mx-auto max-w-4xl'>
            <div className='flex space-x-1'>
            <input className='border border-gray-400 w-full text-2xl'
                onKeyDown={onKeyDownCallback} ></input>
            <button className='border border-gray-400 w-8 font-bold' onClick = {() => AddTask()}>+</button>
            </div>
            <ul>
                <li>
                    {tasks.map( x => <Todo id = {x.id} NameList={x.name} doneFn = {doneTask} deleteFn={deleteTask} />).reverse()}
                </li>
            </ul>
            
            {tasksDone.map( x => <TodoDone NameList={x.name} />).reverse()}

        </div>
    )
}

export default TaskInput