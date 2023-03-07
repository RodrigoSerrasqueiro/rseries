import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { backgroundPages, destakColor, fontsColor } from "./components/colors/colors";

export const Container = styled.div`
  background-color: ${backgroundPages};
  min-height: 100vh;
  max-width: 100vw;
  text-align: center;
`

export const LinkPages = styled(NavLink)`
  text-decoration: none;
  color: ${fontsColor};
  opacity: .4;
  font-size: 25px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  padding: 5px 15px;

  &.active{
    opacity: 100%;
    border-bottom: 1px solid ${destakColor};
  }
`
export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`