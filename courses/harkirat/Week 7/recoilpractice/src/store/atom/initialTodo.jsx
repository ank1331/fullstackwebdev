import { atom, selector } from "recoil";

export const todovalue = atom({
    key:"todovalue",
    default:[
        {
            task:"Mon",
            description: "gym"
        }
    ]
})

export const filteratom = atom({
    key:"filteratom",
    default:"test"
})

export const searchval = selector({
    key:"searchval",
    get:({get})=>{
        const count = get(todovalue)
        const fil = get(filteratom)
        return count.filter(f=>(f.task.includes(fil)|| f.description.includes(fil)))
    }
})

// const bottle  = [{
//     name:"ankit",
//     class:"test"

// },
// {
//     name:"aasa",
//     class:"glass"
// }]

// const filt = "test"

// bottle.filter(f=>(f.name.includes(filt)||f.class.includes(filt)))