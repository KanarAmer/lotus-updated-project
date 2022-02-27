import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Styles:
import "./styles/globals.css";
// Pages:
import Home from "./pages/Home"
import About from "./pages/About"
// Components:
import Header from './components/Header';
import Footer from './components/Footer';
import Signin from './pages/SignIn';
import SignUp from './pages/SignUp';
import axios from 'axios';
import UpdateDetails from './pages/UpdateDetails';

const App: React.FC = () => {
  
  //User state
  const [user, setUser] = useState({
    isLoggedIn: false,
    password: "",
    email: "",
    name: "Artemixx"
  })

  //Checks if a user exists, and gets his information
  const checkAndGet = async (token: any) => {
      const result = await axios.get("http://localhost:5000/api/auth/", {
        headers: {
          'auth-token': token
        }
      })
      if(result.data.success) {
          const {email, password, name} = result.data.details
          setUser({
            isLoggedIn: true,
            password,
            email,
            name
          })
      }
      else {
        localStorage.removeItem('token')
        window.location.reload()
    }
  }

  //If there is a token, check its authenticity
  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) checkAndGet(token)
  }, [])


  //Website layout (Header and footer) and routes
  return (
    <div className="App">
      <BrowserRouter>
        <Header user={user} />
          <Routes>
            <Route path="/signin" 
            element={<Signin />} />
            <Route path="/signup" 
            element={<SignUp />} />
            <Route path="/about" 
            element={<About />} />
            <Route path="/" 
            element={<Home />} />
             <Route path="/update" 
            element={<UpdateDetails />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
