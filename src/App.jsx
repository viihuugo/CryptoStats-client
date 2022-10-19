import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import { Navbar, Footer } from './components';
import { Home, Currencies, SignUp, Login , Profile, ErrorPage } from './pages';
import { AuthContext } from "./helpers/AuthContext"
import axios from 'axios';


function App() {
  
  const [authState, setAuthState] = useState({username: "", status: false});

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          acessToken: localStorage.getItem("acessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({username: response.data.username , status: true});
        }
      });
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/currencies/:crypto" element={<Currencies/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile/:id" element={<Profile/>}/> 
            <Route path="*" exact element={<ErrorPage/>} />          
          </Routes>
          <Footer />
        </Router>
      </AuthContext.Provider>
    </div>
  )
}

export default App
