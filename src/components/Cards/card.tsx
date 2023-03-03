import {useState, useContext} from "react";
import { NavLink } from "react-router-dom";
import { CardSerie, MaterialIcons, PosterImage, CardDetail, H1, H2, FavoriteIcon, StarIcon, Nota} from "./style";
import { GlobalContext } from "../../pages/context/apicontext";

interface Props {
  titulo: string
  nota: number
  lancamento: string
  poster: string
  key: number
  chave: number
}

function Card(props: Props ) {
  const [favoritecolor, setFavoritecolor] = useState(false)
  const { setChave } = useContext(GlobalContext);


  const imgUrl ='https://image.tmdb.org/t/p/w200/'
  return (
    <CardSerie>

      <PosterImage style={{backgroundImage: `url(${imgUrl}${props.poster})`}}>
        <FavoriteIcon className="material-symbols-outlined" onClick={() => setFavoritecolor(!favoritecolor)} active={favoritecolor}>favorite</FavoriteIcon>
      </PosterImage>

      <CardDetail>
        <Nota>
          <StarIcon className="material-icons">star</StarIcon>
          {props.nota}
        </Nota>
        <H1>{props.titulo}</H1>
        <H2>{props.lancamento}</H2>
      </CardDetail>

      <NavLink to="/detalhes" className="details-link" onClick={() => setChave(props.chave)}>
        <MaterialIcons className="material-icons">play_circle_filled</MaterialIcons>
        Detalhes
      </NavLink>
      
    </CardSerie>
  )
}
export default Card;