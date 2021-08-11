import React from 'react'
import SignIn from './../../components/SignIn'
import './../../styles/components.scss'
import Footer from '../../components/Footer'

const Login = () => {
    return (
        <>
        <div style={{height: '100vh'}} className="pt-36 ">
            <SignIn/>
        </div>
        <Footer />
        </>
    )
}

export default Login
