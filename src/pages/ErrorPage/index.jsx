import React from 'react'
import { Wrapper, Content } from './styles'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <Wrapper>
        <Content>
            <h1>Page Not Found :</h1>
            <h2>
            Go to the Home Page: <Link to="/"> Home Page</Link>
            </h2>
        </Content>
        
    </Wrapper>
  )
}
