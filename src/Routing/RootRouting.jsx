import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import NewForm from '../COMPONENT/FORM/NewForm'
import Login from '../COMPONENT/LOGIN/Login'
import Profile from '../COMPONENT/PROFILE/Profile'
import { COUNTER } from '../SERVICES/Action/ActionConst/actionConst'
import Header from '../Layout/Header/Header'

const RootRouting = () => {
    return (
        <div>
            <Router>
                <Header/>
                <Routes>
                    <Route path="reg_form" element={<NewForm />} />
                    <Route path="login_form" element={<Login />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="counter" element={<COUNTER />} />
                    {/* <Route path="formik_reg" element={<FormikReg />} /> */}

                </Routes>
            </Router>
        </div>
    )
}

export default RootRouting