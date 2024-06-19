import React from "react";
import styled from "styled-components";

//* Inline styling
// <div style={{}}></div>

//* Internal styling
const styles={
  nav: {width: "100%",
       height: 70,
       backgroundColor: "cyan",
       display: "flex",
       justifyContent: "space-between",
       alignItems: "center",
       color: "white",
  },
  title: {
    fontSize: 30,
    color: "black",
    fontWeight: 600,
    fontFamily: '"Montserrat", sans-serif',
    textTransform: "uppercase",
    marginLeft: 20
  },
  cardContainer: {
    position: "relative",
    cursor: "pointer"
  },
  cartIcon: {
    height: 48,
    marginRight: 20,
  },
  cartCount: {
    backgroundColor: "orange",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 10,
    top: -5,
    fontSize: 12
  }
}

//* Styled components
const Nav=styled.div`
width: 100%;
height: 70px;
background-color: cyan;
display: flex;
justify-content: space-between;
align-items: center;
color: white;
`

const Title=styled.div`
font-size: 30px;
color: white;
font-weight: 600;
font-family: Montserrat, sans-serif;
text-transform: uppercase;
margin-left: 20px;
&:hover{color: red}
`

const CardContainer=styled.div`
position: relative;
cursor: pointer;
`

const CartIcon=styled.img`
height: 50px;
margin-right: 20px;
`

const CartCount=styled.span`
background-color: ${(props)=> props.color};
border-radius: 50%;
padding: 4px 8px;
position: absolute;
right: 10px;
top: -5px;
font-size: 12px;
color: black;
visibility: ${(props)=> props.show ?"visible" :"hidden"};
`

class NavBar extends React.Component{
  render(){
    return (
      <>
       <Nav>
        <Title>movie-app</Title>
        <CardContainer>
          <CartIcon alt="Cart icon" src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"/>
          <CartCount color="yellow" show={true}>{this.props.cartCount}</CartCount>
        </CardContainer>
       </Nav>
      </>
    )
  }
}

export default NavBar;