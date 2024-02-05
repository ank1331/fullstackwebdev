import { useEffect, useState } from "react"


export function usedebounce(value, timeout){

    const [newval, setNewval]= useState("")
    useEffect(()=>{
        const tim= setTimeout(() => {

            setNewval(value)

        }, timeout);

        return ()=>{
            clearInterval(tim)
        }
    },[value])

    return newval
}


