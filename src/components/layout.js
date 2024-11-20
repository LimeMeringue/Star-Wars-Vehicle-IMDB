import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {
  return (
    <Wrapper>
      <LogoContainer>
        <StaticImage
          alt="Logo"
          src="../images/Star_Wars_Logo.png" 
          layout="constrained"
          width={290}  
          height={120} 
        />
      </LogoContainer>
      <Nav>
        <ul>
          <NavItem>
            <Link to="/" className="nav-link">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/about" className="nav-link">About</Link>
          </NavItem>
          <NavItem>
            <Link to="/film" className="nav-link">Films</Link>
          </NavItem>
          <NavItem>
            <Link to="/search" className="nav-link">Search</Link>
          </NavItem>
        </ul>
      </Nav>

      <Main>
        <h1>{pageTitle}</h1>
        {children}
      </Main>
    </Wrapper>
  )
}

// Styled Components used in the layout
// this is the background for the whole site. Black background with stars (using the image below)
const Wrapper = styled.div`
  background-color: black; 
  color: yellow;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Press Start 2P', cursive;
  position: relative;
  overflow: hidden;
  background-image: url('https://www.transparenttextures.com/patterns/stardust.png'); 
  //background-size: cover;
  // background-position: center;
  z-index: 1;
`
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px; 
`
const Nav = styled.nav`
  margin-top: 20px;
  ul {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style: none;
  }
`
const NavItem = styled.li`
  margin: 0 10px;
  .nav-link {
    color: yellow;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`
const Main = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 20px;
  padding: 20px;
  text-align: center;

  h1 {
    font-size: 2rem;
    color: yellow;
  }
`

export default Layout
