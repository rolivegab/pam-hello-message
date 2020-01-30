import React from 'react'
import { StyledDiv, GlobalStyle } from '../style'
import { NextPage } from 'next'
import Link from 'next/link'

const Index: NextPage = () => (
  <>
    <StyledDiv>
      Olá, Pamzinha!
    </StyledDiv>
    <span style={{color: 'white'}}>Clique <Link href="bye" ><a style={{color: 'lightblue'}}>aqui</a></Link> para dar tchau</span>
    <GlobalStyle />
  </>
)

export default Index
