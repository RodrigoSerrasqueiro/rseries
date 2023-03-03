import styled from "styled-components";
import { destakColor, fontsColor } from "../../components/colors/colors";

export const SobreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 200px;

  @media(max-width: 768px){
    padding: 0 25px;
  }
`
export const SobreTitulo = styled.h1`
  margin-bottom: 25px;
  color: ${destakColor};
  font-family: 'Roboto', sans-serif;
`
export const SobreParagrafo = styled.p`
  color: ${fontsColor};
  text-align: justify;
`
export const Creditos = styled.p`
  color: ${fontsColor};
`
export const Link = styled.a`
  color: ${destakColor};
`