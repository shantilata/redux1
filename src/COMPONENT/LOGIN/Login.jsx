import React from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Login = () => {

    const dispatch = useDispatch()

    const [state, setState] = useState({
        email: '', password: '',
    });


    let changeHandler = (e) => {
        e.persist();
        const { name, value } = e.target;
        setState({ ...state, [name]: value })

    };


    let submitHandler = (e) => {
        e.preventDefault();
        console.log("Collect form login", state);

        let product = new FormData();
        product.append('email', state.email);
        product.append('password', state.password);

        dispatch(signIn(product))
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="email">Email:</label>
                <input type="mail" id="mail" name="mail" onChange={changeHandler} /><br /><br />
                <label htmlFor="pwd">Passsword:</label>
                <input type="text" id="pwd" name="pwd" onChange={changeHandler} /><br /><br />
                <input type='submit' value='Login ' />
            </form>
        </div>
    )
}

export default Login