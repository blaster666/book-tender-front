import React from 'react'
import styled from 'styled-components';
// .navbar{
//   position: fixed;
//   background:#FFF;
//   height: 50px;
//   left: 0;
//   right: 0;
//   top: 0;
// }
// .nav {
//   box-shadow: 0 3px 3px rgba(0,0,0,0.08);
// }
// .nav a {
//   position: relative;
//   display: inline-block;
//   text-decoration: none;
// }
// .navbar-detail{
  // float: left;
  // font-size: 14px;
  // font-weight: 700;
  // margin-top: 18px; 
  // margin-left: 100px; 
// }
// .navbar-detail a{ 
//   margin-left: 50px; 
//   color: rgb(127, 158, 177);
//   text-transform: uppercase;
// }
// .navbar-auth{
  // display: flex;
  // height: 50px;
  // float: right;
  // color: #FFF;
  // font-size: 16px;
  // font-weight: 400;
// }

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

const NavLink = styled.div`
  box-shadow: 0 3px 3px rgba(0,0,0,0.08);
  position: relative;
  display: inline-block;
  text-decoration: none;
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

const BtnDarkBlue = styled.div`
  background: #1b4c6e;
  padding: 16px 15px 10px 15px;
  cursor: pointer;
`
const BtnGreen = styled.div`
  background: #3cce3b;
  cursor: pointer;
  padding: 16px 15px 10px 15px;
`

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
        <BtnDarkBlue>Log In</BtnDarkBlue>
        <BtnGreen>Sign Up</BtnGreen>
      </NavAuth>
    </NavBar>
  )
}

export default Nav
