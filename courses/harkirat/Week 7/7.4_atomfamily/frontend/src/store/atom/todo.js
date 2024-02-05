import {atom, atomFamily} from "recoil"
import { Todos } from "../../todos"

// export const newTodo = atom({
//     key:"newTodo",
//     default:{
//         task:"this is sample task",
//         description:" this is sample description"
//     }
// })

export const todosatomfamily = atomFamily({
    key:"todosatomfamily",
    default: id=>{
        return Todos.find(x=> x.id==id)
    }
})


// function Todo({id}){
//     const todonew = useRecoilValue(todosatomfamily(id))
  
//     return(
//       <div>
//         {todonew.task}
//       </div>
//     )
  
//   }

