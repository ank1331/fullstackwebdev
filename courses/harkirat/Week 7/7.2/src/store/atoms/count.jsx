import { atom, selector } from "recoil";

export const todo = atom({
    key:"todo",
    default:[{
    task:"Mon",
    description:"gym"
}]})


export const filterval = atom({
    key:"filterval",
    default:""
})

export const filtered = selector({
    key:"filtered",
    get:({get})=>{
        const initialtodo = get(todo)
        const newfilterval = get(filterval)
        return initialtodo.filter(to=>(to.description.includes(newfilterval)||to.task.includes(newfilterval)))
    }
})