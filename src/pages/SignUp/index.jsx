import React from 'react'
import { Wrapper, Container , Access, Register, Username , Header, Content, Button } from './styles'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {

    const initialValues = {
        username: "",
        password: "",
      };
    
      const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(4).max(20).required(),
      });

      let navigate = useNavigate();
    
      const onSubmit = (data) => {
        axios.post("http://localhost:3001/auth", data).then(() => {
          navigate("/login")
        });
      };




  return (
    <>
        <Wrapper>
            <Container>
                <Header>
                    <Access onClick={()=>{navigate("/login")}}>Log In</Access>
                    <Register>Sign Up</Register>
                </Header>
                <Content>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        <Form>
                          <Username>Username</Username>  
                          <Field id="inputComment" name="username" autoComplete="off"/>
                          <Username>Password</Username> 
                          <Field id="inputComment" type="password" name="password" autoComplete="off"/>
                          <Button type='submit'>Create an account</Button>
                        </Form>
                    </Formik>
                </Content>
                
                
            </Container>
        </Wrapper>
       
    </>
    
  )
}
