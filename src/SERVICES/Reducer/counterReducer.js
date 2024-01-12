import { COUNTER } from "../Action/ActionConst/actionConst";
let initialState = {
    count: 0,
    msg: ""
};

const counterReducer = (state = initialState, action) => {

    switch (action.type) {
        case COUNTER.INCREMENT: return {
            count: state.count + 1,
            msg: action.payload.msg
        }

        case COUNTER.DECREMENT: return {
            count: state.count - 1,
            msg: action.payload.msg
        }


        case COUNTER.RESET: return {
            count: 0,
            msg: action.payload.msg
        }

        default: return state;
    }
}

export default counterReducer