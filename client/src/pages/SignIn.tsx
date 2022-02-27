import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// Styles:
import Styles from "../styles/Pages/SignIn.module.css"

function SignIn() {
    
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
        axios.post("http://localhost:5000/api/auth/signin", {email:inputs.email, password:inputs.password})
        .then(result => {
            localStorage.setItem('token', result.data.details)
            setFeedback("Logged in successfully")
            window.location.href = "http://localhost:3000/"
            
        })
        .catch(err => {
            setFeedback(err.response.data.details || "Unknown error.")
        })
    }

    return (
        <main className={Styles['SignIn']}>
            <fieldset>
                <legend><h1 className={Styles['title']}>Sign in</h1></legend> 
                <form className={Styles["some-class"]}>
                    <input className={Styles['field']} type="email" onChange={(e) => handleChange(e)} name="email" placeholder="email" value={inputs.email}/>
                    <input className={Styles['field']} type="password" onChange={(e) => handleChange(e)} name="password" placeholder="password" value={inputs.password}/>
                    <input type="submit" value="sign in" onClick={(e) => handleSubmit(e)}/>
                </form>
               
            </fieldset>
            <Link style={{all: "unset", cursor: "pointer", fontSize:"1.1rem", color: "blue"}} to="/signup">Don't have an account ? create one !</Link>
            <p className={Styles["signin-feedback"]}>{feedback}</p>
        </main>
    )
}


export default SignIn
