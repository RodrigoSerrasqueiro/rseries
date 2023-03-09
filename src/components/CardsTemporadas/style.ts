import styled from "styled-components";
import { fontsColor, backgroundItemColor } from "../colors/colors";

export const CardTemporadaContainer = styled.div`
 background-color: ${backgroundItemColor};
 max-width: 100%;
 min-width: 100%;
 height: 200px;
 border-radius: 15px;
 box-shadow: -10px 10px 15px black;
 margin-bottom: 40px;
 display: flex;

 @media (max-width: 768px){
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
 }
`
export const PosterTemporada = styled.img`
  width: 20%;
  height: 200px;
  border-radius: 0 8px 8px 0;

  @media(max-width: 768px){
    width: 50%;
    border-radius: 10px;
    height: 230px;
  }
`
export const InfoTemporada = styled.div`
  width: 80%;
  padding: 0 30px;

  @media(max-width: 768px){
    padding: 0 5px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`
export const Episodio = styled.h3`
  color: ${fontsColor};
  text-align: left;
`
export const Paragrafo1 = styled.p`
  color: ${fontsColor};
  font-size: 14px;
  text-align: left;
  font-weight: bold;
`
export const Paragrafo2 = styled.p`
  color: ${fontsColor};
  font-size: 14px;
  text-align: left;
`
export const ParagrafoContainer = styled.div`
   height: 100px;
    overflow-y: scroll;
    text-align: justify;
    padding: 0 5px;
    ::-webkit-scrollbar{
      width: 1px;
    }
    ::-webkit-scrollbar-thumb{
      background-color: #f2f2f2;
      opacity: .1;
      border-radius: 10px;
    }
`
