import React from 'react'
import { useState } from 'react'
// import axios from 'axios'
import { useDispatch } from 'react-redux'
import { signUp } from '../../SERVICES/Action/AuthAction/authAction'
// import { signUp } from '../../SERVICES/Action/AuthAction/authAction'

const NewForm = () => {

    // use after formData.append(profile_pic)


    const dispatch = useDispatch()

    let [inputState, setInput] = useState({
        fname: "",
        lname: "",
        mail: "",
        pwd: "",

        isError: { fname: "", lname: "", mail: "", pwd: "" }
    })

    let [imgState, setImgState] = useState();
    // console.log("iamge collect", imgState)

    let changeHandler = (event) => {
        event.persist();
        let { name, value } = event.target;
        setInput({ ...inputState, [name]: value })
    }

    let submitHandler = (event) => {
        event.preventDefault();
        console.log("Submit value", inputState);
        console.log("Data submit :", inputState)
        //change to required object for api

        let formData = new FormData();
        formData.append("first_name", inputState.firstname);
        formData.append("last_name", inputState.lastname);
        formData.append("email", inputState.email);
        formData.append("password", inputState.pwd);
        formData.append("profile_pic", imgState);

        dispatch(signUp(formData));





    }

    return (
        <div>
            <h1>NewForm</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="fname">First name:</label>
                <input type="text" id="fname" name="fname" onChange={changeHandler} /><br />
                {/* {inputState.isError.fname.length > 0 ? <p className="error">{inputState.isError.fname}</p> : ""} */}
                <br />
                <label htmlFor='lname'>Last name:</label>
                <input type="text" id="lname" name="lname" onChange={changeHandler} /><br />
                {/* {inputState.isError.lname.length > 0 ? <p className="error">{inputState.isError.lname}</p> : ""} */}
                <br />
                <label htmlFor="email">Email:</label>
                <input type="mail" id="mail" name="mail" onChange={changeHandler} /><br />
                {/* {inputState.isError.mail.length > 0 ? <p className="error">{inputState.isError.mail}</p> : ""} */}
                <br />
                <label htmlFor="pwd">Passsword:</label>
                <input type="text" id="pwd" name="pwd" onChange={changeHandler} /><br /><br />
                {/* {inputState.isError.pwd.length > 0 ? <p className="error">{inputState.isError.pwd}</p> : ""} */}
                <label htmlFor='profile_pic'>Choose Profile Picture</label>
                <input type='file' name="profile_pic" onChange={(event) => setImgState(event.target.files[0])}
                    accept="image/*" /> <br></br><br></br>
                <input type="submit" value="Add data" />
            </form>

        </div>
    )
}

export default NewForm