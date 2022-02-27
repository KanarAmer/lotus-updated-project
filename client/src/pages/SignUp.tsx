import React, { useEffect, useState } from 'react'
import axios from 'axios'
// Styles:
import Styles from "../styles/Pages/SignIn.module.css"
import {Link} from 'react-router-dom'
function SignUp() {
    
    //if already logged in, redirect to home page
    const isLoggedIn = async (token: any) => {
        const result = await axios.get("http://localhost:5000/api/auth/", {
        headers: {
            'auth-token': token
        }
        })
        if(result.data.success) window.location.href = "http://localhost:3000/"
    }

    useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) isLoggedIn(token)
    }, [])

    //Inputs state
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    })

    //Response feedback state
    const [feedback, setFeedback] = useState("")

    //Change event handler
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({...inputs, [e.target.name]: e.target.value})
    }

    //Submit handler
    const handleSubmit = async (e: React.FormEvent) =>  {
        e.preventDefault()
        const result = await axios.post("http://localhost:5000/api/auth/signup", {user: {name: inputs.name, email:inputs.email, password:inputs.password}})
        .then(() => {
            setFeedback("signed up successfully. please login")
            
        })
        .catch(err => {
            setFeedback(err.response.data.details || "Unknown error.")
        })
    }
    

    return (
        <main className={Styles['SignIn']}>
            <fieldset>
                <legend><h1 className={Styles['title']}>Sign Up</h1></legend> 
                <form className={Styles["some-class"]}>
                    <input className={Styles['field']} type="name" onChange={(e) => handleChange(e)} name="name" placeholder="name" value={inputs.name}/>
                    <input className={Styles['field']} type="email" onChange={(e) => handleChange(e)} name="email" placeholder="email" value={inputs.email}/>
                    <input className={Styles['field']} type="password" onChange={(e) => handleChange(e)} name="password" placeholder="password" value={inputs.password}/>
                    <input type="submit" value="sign up" onClick={(e) => handleSubmit(e)}/>
                </form>
            </fieldset>
            <Link style={{all: "unset", cursor: "pointer", fontSize:"1.1rem", color: "blue"}} to="/signin">Already have an account ? sign in</Link>
            <p className={Styles["signin-feedback"]}>{feedback}</p>
        </main>
    )
}


export default SignUp
