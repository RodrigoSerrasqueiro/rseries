import styled from "styled-components";
import { backgroundItemColor, destakColor, fontsColor} from "../colors/colors";

interface Props {
  active: boolean
}

export const CardSerie = styled.div`
  color: ${fontsColor};
  background-color: ${backgroundItemColor};
  max-width: 200px;
  min-height: 500px;
  border-radius: 10px;
  font-family: 'Roboto', sans-serif;
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const MaterialIcons = styled.span`

`
export const FavoriteIcon = styled.span<Props>`
  position: relative;
  left: -90px;
  top: -120px;
  cursor: pointer;
  transition: 0.5s;
  color: ${(Props) => Props.active ? 'red' : 'white'};

  &:hover{
    transform: scale(1.5);
  }
`
export const StarIcon = styled.span`
  color: ${destakColor};
`
export const PosterImage = styled.div`
  padding: 130px 100px;
  border-radius: 10px 10px 0 0;
  display: flex;
`
export const CardDetail = styled.div`
  text-align: left;
  padding: 5px 15px;
  height: 150px;
`
export const Nota = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  width: 100%;
  margin-bottom: 15px;
`
export const H1 = styled.h1`
  margin: 0;
  font-size: 1.3em;
`
export const H2 = styled.h2`
  font-size: .8em;
  opacity: .7;
  font-weight: lighter;
  margin: 0;
`