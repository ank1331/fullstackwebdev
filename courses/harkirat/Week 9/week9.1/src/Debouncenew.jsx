import { useEffect, useState } from "react";

export function useDebouncenew(value, timeout ){

  const [newval, setnewval] = useState("")

  useEffect(()=>{
    const timeoutval = setTimeout(()=>{
      setnewval(value)
    }, timeout)

    return ()=>{
      clearTimeout(timeoutval)
    }
  },[value])
  
  return newval
}