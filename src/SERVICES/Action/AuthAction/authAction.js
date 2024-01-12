import { authConstant } from "../ActionConst/actionConst";
import axios from 'axios'

export const signUp = (userValue) => {

    // here user value means the form value coming from the registration form
    // action request send to reducer 
    return async (dispatch) => {
        dispatch({ type: `${authConstant.USER_REGISER}_REQUEST` });
        axios.post("https://wtsacademy.dedicateddevelopers.us/api/user/signup", userValue, {
            headers: {
                "Content-Type": "application/form-data",
                "Access-Control-Allow-Origin": "*",

            },

        }

        )
            .then((res) => {
                console.log("Response for registration", res.data);
                dispatch({
                    type: `${authConstant.USER_REGISER}_SUCCESS`,
                    payload: {
                        message: res.data.message,
                        data: res.data,
                        status: res.status
                    },
                });
            })
            .catch((err) => {

                dispatch({
                    type: `${authConstant.USER_REGISER}_FAILURE`,
                    payload: {
                        errorMsg: "Data is not registerd"

                    },

                });
            });

    }

}



export const signIn = (user) => {

    return async (dispatch) => {
        dispatch({ type: `${authConstant.USER_LOGIN}_REQUEST` });

        axios.post("https://wtsacademy.dedicateddevelopers.us/api/user/signin", user)

            .then((res) => {
                //console.log("Response for Login", res.data);

                if (res.data.status === 200) {
                    // console.log("Login Successful");
                    alert(res.data.message);

                    window.sessionStorage.setItem("authtoken", res.data.token)

                }
                else {
                    console.log(res.data.message);
                    alert(res.data.message + "\n\nTry Again");
                }

                dispatch({
                    type: `${authConstant.USER_LOGIN}_SUCCESS`,
                    payload: {
                        message: res.data.message,
                        data: res.data,
                        status: res.status
                    },
                });
            })
            .catch((err) => {
                dispatch({
                    type: `${authConstant.USER_LOGIN}_FAILURE`,
                    payload: { errorMsg: "Login required" },
                });
            })
    }
}


export const signOut = () => {

    return async (dispatch) => {
        dispatch({ type: `${authConstant.USER_LOGOUT}_REQUEST` });

        if (sessionStorage.getItem("authtoken") !== "") {

            sessionStorage.clear();

            dispatch({
                type: `${authConstant.USER_LOGOUT}_SUCCESS`,
                payload: { message: "Logout Successfull" },
            });
        }
        else {
            dispatch({
                type: `${authConstant.USER_LOGIN}_FAILURE`,
                payload: { errorMsg: "Failed to LoggedOut" },
            });
        }
    }
}




export const viewProfile = () => {

    return async (dispatch) => {
        dispatch({ type: `${authConstant.PROFILE}_REQUEST` });

        let authToken = window.sessionStorage.getItem("authtoken");

        axios.get("https://wtsacademy.dedicateddevelopers.us/api/user/profile-details", {

            headers: {
                "x-access-token": authToken,
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*",
            },
        }
        )
            .then((res) => {
                // console.log("Response for profile", res);
                //for image
                let base_url = "https://wtsacademy.dedicateddevelopers.us/";
                let folder_path = "uploads/user/profile_pic/";
                let img_url = base_url + folder_path + res.data.data.profile_pic;
                // console.log("Image_url: ", img_url);

                dispatch({
                    type: `${authConstant.PROFILE}_SUCCESS`,
                    payload: {
                        message: res.data.message,
                        data: {
                            ...res.data.data,
                            profile_pic: img_url
                        },
                        status: res.status
                    },
                });
            })
            .catch((err) => {
                dispatch({
                    type: `${authConstant.PROFILE}_FAILURE`,
                    payload: { errorMsg: "Data not fetched" },
                });
            })
    }
}
