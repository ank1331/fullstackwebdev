import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { atomvalue, enterName } from "./store/atom/count";
import { todo } from "./store/atom/Todo";
import { filteratom, searchval, todovalue } from "./store/atom/initialTodo";
// import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <RecoilRoot>
        <Tododikhao/>
        <Addtodo />
        <Searchbar />
      </RecoilRoot>
    </>
  );
}


function Tododikhao(){
  const todoshowkaro = useRecoilValue(todovalue)
  const filterenwval = useRecoilValue(filteratom)
  const filteredval = useRecoilValue(searchval)
  console.log(filteredval.length)
  return(
    <div>
      {filteredval.length>0?filteredval.map((todos)=>(
        <div key={todos.task}>
          <div>{todos.task}</div> 
          <div>{todos.description}</div>
          </div>)):todoshowkaro.map((todos)=>(
        <div key={todos.task}>
          <div>{todos.task}</div> 
          <div>{todos.description}</div>
          </div>
      ))}
    </div>
  )
}

function Searchbar(){
  const filterval = useRecoilValue(filteratom)
  const [bot, setbot] = useRecoilState(filteratom)
  const [newfil, setnewfil] = useState("")
console.log(bot)
  return(
    <div>
      <input onChange={(e)=>setnewfil(e.target.value)} type="text" placeholder="filteravalue" />
      <button onClick={()=>setbot(newfil)}> filter</button>
      <div>{filterval}</div>
    </div>
  )
}





function Addtodo(){
  const [yehhai, setyehhai] = useRecoilState(todovalue)
  const [va, setva]=useState({
    task:"",
    description:""
  })

  function handleChange(e){
    setva({...va, [e.target.id]:e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    setyehhai([...yehhai, va])
    // const todoshowkaro = useRecoilValue(todovalue)
    // todoshowkaro.push(va)
  }

  return(
    <form onSubmit={handleSubmit}>
        <input type="text" name="task" id="task" placeholder="Enter Task"  onChange={handleChange}/>
        <input type="text" name="description" id="description" placeholder="Enter description" onChange={handleChange}/>
        <button>Create Todo</button>
    </form>
  )


}


export default App;
