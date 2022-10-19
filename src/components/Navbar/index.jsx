import React, { useState , useContext } from 'react'
import { Container , Logo , Menu , Item , SignUp } from './styles'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../helpers/AuthContext";

export default function Navbar() {

  const { authState } = useContext(AuthContext);
  const { setAuthState } = useContext(AuthContext);
  

  let navigate = useNavigate();

  const logout = ()=>{
    localStorage.removeItem("acessToken");
    setAuthState({username: "", status: false});
  }

  return (
    <Container>
        <Logo onClick={()=>{navigate("/")}}>CryptoStats</Logo>
        <Menu>
          
          {!authState.status ? (
              <>
              <Item onClick={()=>{navigate("/login")}}>Login</Item>
              <SignUp onClick={()=>{navigate("/signUp")}}>Sign Up</SignUp>
              </>
          ) : (
            <>
            
            <SignUp onClick={logout}>Log out</SignUp>
            
            </>
            
          )}   

        </Menu>
    </Container>
  )
}
