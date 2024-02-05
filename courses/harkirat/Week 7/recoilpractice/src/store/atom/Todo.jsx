import { atom } from "recoil";

export const todo = atom({
    key:"todo",
    default: [{
        task:" yeh hai task",
        description:" yeh hai task ka description"
    }]
})