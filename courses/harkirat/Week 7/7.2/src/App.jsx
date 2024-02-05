// import './App.css';
// import { useContext, useState } from 'react';
// import { CountContext } from './Contextfile.jsx';

import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
// import { countAtom, evenSelector, newvalue } from "./store/atoms/count";
import { filtered, filterval, newval, todo } from "./store/atoms/count";
import { useState } from "react";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Showtodo />
        <Newaddtodo />
        <Filtervala/>
      </RecoilRoot>
    </div>
  );
}

function Showtodo() {
  const todoval = useRecoilValue(todo);
  const fii = useRecoilValue(filtered)
  console.log(fii.length)
  return (
    <div>
      {fii.length>0?fii.map((to) => (
        <div key={to.task}>
          <div>{to.task}</div>
          <div>{to.description}</div>
        </div>
      )):todoval.map((to) => (
        <div key={to.task}>
          <div>{to.task}</div>
          <div>{to.description}</div>
        </div>
      ))}
    </div>
  );}

function Newaddtodo() {
    const [newtodo, setnewtodo] = useRecoilState(todo);
    const todosall = useRecoilValue(todo)

    const [changeval, setchangeval] = useState({
      task: "",
      description: "",
    });

    function handleChange(e){
      setchangeval({...changeval, [e.target.id]:e.target.value})
    }

    function handleClick(){
      console.log(changeval)
      setchangeval({
        task:"",
        description:""
      })
      setnewtodo([...newtodo, changeval])
    }
    console.log(todosall)
    return (
      <div>
        {/* <form action="" method="get"></form> */}
        <input type="text" onChange={handleChange} name="task" id="task" />
        <input type="text" onChange={handleChange} name="description" id="description" />
        <button onClick={handleClick}>Add Todo</button>
      </div>
    );
  }

function Filtervala(){
  // const fil= useRecoilValue(filterval)
  const [fill, setfill] = useRecoilState(filterval)
  const [oneval, setoneval] = useState("")
  console.log(fill)
  return(
    <>
    <input type="text" name="" onChange={(e)=>setoneval(e.target.value)} placeholder="Enter Filter value" id="" />
    <button onClick={()=>setfill(oneval)}>
      filter
    </button>
    </>
    )
}


export default App;
