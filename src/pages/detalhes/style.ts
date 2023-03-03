import styled from "styled-components";
import { fontsColor, backgroundItemColor, destakColor } from "../../components/colors/colors";

export const DetalhesContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  align-items: center;
  overflow-y: hidden;
`

export const ButtonContainer = styled.div`
width: 80%;
height: 35px;
align-items: center;
margin: 10px 0 10px 100px;

@media (max-width: 1080px){
  display: flex;
  justify-content: center;
  margin: 10px 0;
}
`

export const Hero = styled.div`
  width: 50%;
  display: flex;
  justify-content: left;
  background-color: ${backgroundItemColor};
  border-radius: 15px;
  box-shadow: -10px 10px 15px black;

  @media (max-width: 768px){
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media(max-width: 1080px){
  width: 95%;
}
`
export const BackButton = styled.button`
  background-color: transparent;
  border: 2px solid #c4c4c4;
  color: ${fontsColor};
  border-radius: 16px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100px;
  height: 30px;
  font-weight: 700;
  cursor: pointer;

  &:hover{
    background-color: #fff;
    color: #000;
  }
`
export const BackIcon = styled.span`
  cursor: pointer;
`
export const PosterImg = styled.img`
  width: 250px;
  height: 500px;
  border-radius: 10px;
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 500px;
`
export const Titulo = styled.h1`
  color: ${fontsColor};
  font-family: 'Roboto', sans-serif;
`
export const Nota = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  width: 100%;
  height: 30px;
  color: ${fontsColor};
`
export const StarIcon = styled.span`
  color: ${destakColor};
`
export const Description = styled.div`
  width: 100%;
  max-height: 100%;
  
  @media (max-width: 768px){
    overflow-y: scroll;
  }
`
export const Paragrafo = styled.p`
  text-align: justify;
  font-size: 16px;
  color: ${fontsColor};
  padding: 0 15px;
  height: 300px;

  @media(max-width: 768px){
    padding: 0;
  }
`
export const Temporadas = styled.section`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;

@media(max-width: 768px){
  width: 95%;
}
@media(max-width: 1080px){
  width: 95%;
}
`
export const Subtitulo = styled.h2`
  color: ${destakColor};
  font-weight: bold;
  letter-spacing: .2rem;
`
