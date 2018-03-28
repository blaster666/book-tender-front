import React from 'react'
import styled from 'styled-components';

const Nav = (props) => {
  return (
    <NavBar>
      <NavMenu>
        <NavLink href="">Tender</NavLink>
        <NavLink href="">Buy</NavLink>
        <NavLink href="">Sell</NavLink>
      </NavMenu>
      <NavAuth>
        <BtnCreate>Create</BtnCreate>
        <BtnNav color="#1b4c6e" colorHover=" #285c81">Log In</BtnNav>
        <BtnNav color="#3cce3b" colorHover="#5cd65c" >Sign Up</BtnNav>
      </NavAuth>
    </NavBar>
  )
}

const NavBar = styled.div`
  position: fixed;
  background:#FFF;
  box-shadow: 0 3px 3px rgba(0,0,0,0.08);
  height: 50px;
  left: 0;
  right: 0;
  top: 0;
`

const NavMenu = styled.div`
  float: left;
  font-size: 14px;
  font-weight: 700;
  margin-top: 18px; 
  margin-left: 100px; 
`

const NavLink = styled.a`
  display: inline-block;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  margin-left: 50px; 
  color: rgb(127, 158, 177);
`

const NavAuth = styled.div`
  display: flex;
  height: 50px;
  float: right;
  color: #FFF;
  font-size: 16px;
  font-weight: 400;
`

const BtnCreate = styled.div`
  color: red;
`

const BtnNav = styled.div`
  background: ${ props => props.color };
  padding: 16px 15px 10px 15px;
  cursor: pointer;
  &:hover{
    background: ${props => props.colorHover}; 
    transition: .3s;
  }
`

export default Nav
