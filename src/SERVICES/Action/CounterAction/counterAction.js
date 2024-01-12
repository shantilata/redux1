import { COUNTER } from "../ActionConst/actionConst";
export const incCount = () => {
    return {
        type: COUNTER.INCREMENT,
        payload: { msg: "Increment done" }
    }
}

export const decCount = () => {
    return {
        type: COUNTER.DECREMENT,
        payload: { msg: "Decrement done" }
    }
}


export const resetCount = () => {
    return {
        type: COUNTER.RESET,
        payload: { msg: "Reset done" }
    }
}