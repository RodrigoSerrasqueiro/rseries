import styled from "styled-components";
import { backgroundItemColor, fontsColor } from "../colors/colors"; 

export const HeaderContainer = styled.header`
  max-width: 100vw;
  height: 70px;
  background-color: ${backgroundItemColor};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 40px;
  color: ${fontsColor};

  @media(max-width: 380px){
    padding: 0 5px;
  }
`
export const Logo = styled.a`
  cursor: pointer;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
  color: white;
`