import React, { useState, useContext } from 'react'
import { Container, Wrapper, Header, Access, Register, Content, Username, Button } from '../SignUp/styles'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../helpers/AuthContext";


export default function Login() {

    let navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setAuthState } = useContext(AuthContext);
    
    
    const login = () => {
        const data = { username: username, password: password };
        axios.post("http://localhost:3001/auth/login", data).then((response) => {
            if (response.data.error) {
                alert(response.data.error);
            } else {
            localStorage.setItem("acessToken", response.data.token);
            setAuthState({username: response.data.username, status: true});
            navigate("/")
            }
        });
    };


  return (
    <Wrapper>
        <Container>
            <Header>
                <Register>Log In</Register>
                <Access onClick={()=>{navigate("/signup")}}>Sign Up</Access>
            </Header>
            <Content>
                <Username>Username</Username>
                <input autoComplete="off" id="inputComment" type="text" 
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }}
                />
                <Username>Password</Username>
                <input autoComplete="off" id="inputComment" type="password"
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />
                <Button onClick={login}>Login</Button>
            </Content>
        </Container>
    </Wrapper>
  )
}
