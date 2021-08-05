import TaskInput from "./TaskInput"


type TodoDoneProps = {
    NameList : string;

}

const TodoDone = ({NameList} : TodoDoneProps) => {

    return (

        <div
            className="flex justify-between h-8 items-center py-6 border-b"
          >
            <del className="text-2xl text-line-through"> {NameList} </del>
            
          </div>
        
        
        
    )
}

export default TodoDone