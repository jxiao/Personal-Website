import React from "react"
import styled from "styled-components"

const FooterTag = styled.footer`
  width: 100%;
  text-align: center;
  margin: 1rem auto 1rem;
`

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <FooterTag>
      <p>Jeffrey Xiao © {year}</p>
    </FooterTag>
  )
}

export default Footer
