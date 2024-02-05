import { useState } from "react";

export function Paragraphgen() {

const [rowcount, setrowcount] = useState(0)
    
function handleClick(){

    const divelement = document.createElement("textarea")
    divelement.rows = {rowcount}
    divelement.placeholder = "Lorem"+{rowcount}
    document.body.appendChild(divelement)
    console.log("hello")
}

  return (
    <>
      <label htmlFor="">Enter the lenght of paragraph</label>
      <input onChange={(e)=>setrowcount(e.target.value)} type="text" placeholder="enter the length of paragraph" />
      <button onClick={handleClick}> Create Paragraph</button>
    </>
  );
}
