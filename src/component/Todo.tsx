import {useState} from 'react'

type TodoProps = {
    id : number
    NameList : string;
    doneFn : Function;
    deleteFn: Function;

}


const Todo = ({id, NameList, doneFn, deleteFn} : TodoProps) => {
    const [style, setStyle] = useState<object>({visibility: 'hidden'}) ;

    
    
    

    return (
        
        <div
            className="flex justify-between h-8 items-center py-6 border-b"
            onMouseEnter={e => {
                setStyle({visibility: 'visible'});
            }}
            onMouseLeave={e => {
                setStyle({visibility: 'hidden'})
            }}
          >
            <span className="text-2xl"> {NameList} </span>

            <div className="flex space-x-1 items-center" >
                      
              <button style = {style}  className="bg-green-400 w-24 text-2xl" onClick={ () => doneFn(id, NameList)}>Done</button>
              <button style = {style} className=" bg-red-400 w-24 text-2xl" onClick={ () => deleteFn(id)} >Delete</button>
            </div>
          </div>
        
        
    )
}

export default Todo