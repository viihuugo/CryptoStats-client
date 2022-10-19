import React from 'react'
import { Wrapper, Container, Tittle, Text, Info, Copyright, Socials, Link } from './styles'

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <Tittle>CryptoStats</Tittle>
        <Text>CryptoStats provides a fundamental analysis of the crypto market. In addition to tracking price, volume and market capitalisation.</Text>
      </Container>
      <Info>
        <Copyright>© 2022 Victor Alves. All Rights Reserved.</Copyright>
        <Socials>
          <Link><a href='https://www.linkedin.com/in/victorhugoalves/'>LINKEDIN</a></Link>
          <Link><a href='https://github.com/viihuugo'>GITHUB</a></Link>
        </Socials>

      </Info>
    </Wrapper>
    
  )
}
