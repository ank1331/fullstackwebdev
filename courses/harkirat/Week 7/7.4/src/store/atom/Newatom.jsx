import { atom, selector, useRecoilValue } from "recoil";

export const networkatom = atom({
    key:"networkatom",
    default:102
})

export const jobsatom = atom({
    key:"jobsatom",
    default:0
})

export const notificationatom = atom({
    key:"notificationatom",
    default:12
})

export const messagingatom = atom({
    key:"messagingatom",
    default:0
})

export const totalnotifications = selector({
    key:"totalnotifications",
    get:({get})=>{
        const m = get(messagingatom)
        const n = get(notificationatom)
        const j = get(jobsatom)
        const ne = get(networkatom)
        return m+n+j+ne
    }
})