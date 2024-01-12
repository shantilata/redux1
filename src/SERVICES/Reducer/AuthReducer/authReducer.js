import { authConstant } from "../../Action/ActionConst/actionConst";
const initState = {
    // api parameter
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    status: 0,

    // user defind variables

    message: "",
    error: "",
    authenticated: false,
    authToken: "",
};


const AuthReducer = (state = initState, action) => {

    switch (action.type) {
        case `${authConstant.USER_REGISER}_REQUEST`:
            return { ...state, };


        case `${authConstant.USER_REGISER}_SUCCESS`:
            return (state = {
                ...state,
                message: action.payload.message,
                status: action.payload.status
            })
        case `${authConstant.USER_REGISER}_FAILURE`:
            return (state = {
                ...state,
                error: action.payload.errorMsg,

            })

        // end of registration


        case `${authConstant.USER_LOGIN}_REQUEST`:
            return {
                ...state,
            };
        case `${authConstant.USER_LOGIN}_SUCCESS`:
            return (state = {
                ...state,
                authenticated: true,
                authToken: action.payload.userToken,
                message: action.payload.message,
                first_name: action.payload.data.first_name,
                status: action.payload.status
            });
        case `${authConstant.USER_LOGIN}_FAILURE`:
            return (state = {
                ...state,
                error: action.payload.errorMsg,
            });
        // End of login case



        case `${authConstant.USER_LOGOUT}_REQUEST`:
            return {
                ...state,
            };
        case `${authConstant.USER_LOGOUT}_SUCCESS`:
            return (state = {
                ...state,
                authenticated: false,
                authToken: "",
                message: action.payload.message
            });
        case `${authConstant.USER_LOGOUT}_FAILURE`:
            return (state = {
                ...state,
                error: action.payload.errorMsg,
            });
        // End of logout case
        case `${authConstant.PROFILE}_REQUEST`:
            return {
                ...state,
            };
        case `${authConstant.PROFILE}_SUCCESS`:
            return (state = {
                ...state,
                authenticated: true,
                message: action.payload.message,
                first_name: action.payload.data.first_name,
                last_name: action.payload.data.last_name,
                email: action.payload.data.email,
                profile_pic: action.payload.data.profile_pic,
                status: action.payload.status
            });
        case `${authConstant.PROFILE}_FAILURE`:
            return (state = {
                ...state,
                error: action.payload.errorMsg,
            });
        // End of profile case


        default: return state
    }
}

export default AuthReducer