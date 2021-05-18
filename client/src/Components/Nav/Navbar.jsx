import React from 'react'
import Burger from './Burger';
import styled from 'styled-components';


const Nav = styled.nav`
  width: 100%;
  top: 0;
  height: 65px;
  // border-bottom: 1px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: #0089FF;

  .logo {
    padding: 5px 0;
  }

  .main-logo {
    height: 55px;
    width: auto;
  }

 
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
      <img class="main-logo" src="https://piramideguiaparapadres.com/wp-content/uploads/2018/03/pediatric-logo-color.png" alt="Pirámide guía para padres" />
       </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
