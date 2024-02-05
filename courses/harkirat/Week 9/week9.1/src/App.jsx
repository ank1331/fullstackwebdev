import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import "./App.css";
import { usedebounce } from "./Debounce";
import {  useDebouncenew } from "./Debouncenew";
// import {  useOnline } from "./Online";


function App (){

  const [inititi, setin] = useState("")
  const newvalue = useDebouncenew(inititi, 500)

  return(
    <div>

    Debounce value is {newvalue}
    <input type="text" onChange={(e)=>setin(e.target.value)} />
    </div>
   
  )
}

// export  App



// function App() {
//   const [input, setinput] = useState("")
//   const debounce = usedebounce(input,500);
//   return (
//     <div>
//       debounced value is {debounce}
//       <input type="test" onChange={(e)=>setinput(e.target.value)} />
//     </div>
//   );
// }

// function useInterval(fn, timeout){

//   useEffect(()=>{
//      const newval = setInterval(() => {
//       fn()
//     }, timeout);

//     return ()=>{clearInterval(newval)}

//   },[])

// }

function useMousepointer() {
  const [pointer, setpointer] = useState({
    x: 0,
    y: 0,
  });

  const handlemousemove = (e) => {
    setpointer({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handlemousemove);

    return () => {
      window.removeEventListener("mousemove", handlemousemove);
    };
  }, []);

  return pointer;
}

function useOnline() {
  const [onlinestatus, setOnlinestatus] = useState("");
  setInterval(() => {
    setOnlinestatus(window.navigator.onLine);
  }, 2000);

  return onlinestatus;
}

export default App;

// function useTodos(n) {
//   const [todos, setTodos] = useState([]);
//   const [loading, setloading] = useState(true);

//   useEffect(() => {
//   //  const value =  setInterval(() => {
//   //     axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
//   //       setTodos(res.data.todos);
//   //       setloading(false);
//   //     });
//   //   }, n * 1000);
//     axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
//       setTodos(res.data.todos);
//       setloading(false);
//     });

//     return (()=>{
//       clearInterval(value)
//     })

//   }, [n]);
//   // console.log(loading)
//   return { todos, loading };
// }

// function App() {
//   // const { todos, loading } = useTodos(4);
//   // console.log(loading);

//   // if (loading) {
//   //   return <div>Loading...</div>;
//   // }

//   return (
//     <div>
//       {/* {todos.map((todo) => ( */}
//         {/* <Track key={todo.title} todo={todo} /> */}
//       {/* ))} */}
//     </div>
//   );
// }

// function Track({ todo }) {
//   return (
//     <div>
//       {todo.title}
//       <br />
//       {todo.description}
//     </div>
//   );
// }
