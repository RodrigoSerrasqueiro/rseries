import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { BackButton, BackIcon, ButtonContainer, DetalhesContainer, Hero, PosterImg, InfoContainer, Titulo, Nota, StarIcon, Description, Paragrafo, Temporadas, Subtitulo } from "./style";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/apicontext";
import CardTemporada from "../../components/CardsTemporadas/CardsTemporadas";

interface DetalhesType {
  poster_path: string
  name: string, 
  vote_average: number
  overview: string
}

function Detalhes() {

  const navigate = useNavigate();

  const { chave } = useContext(GlobalContext);

  const handleClickVoltar = () => {
    navigate(-1);
  };

  const [detalhes, setDetalhes] = useState<DetalhesType>({
    poster_path: "", 
    vote_average: 0,
    overview: "",
    name: ""
  });

  const [temporadas, setTemporadas] = useState([])

  
  const urlApi = `https://api.themoviedb.org/3/tv/${chave}?api_key=333914a628335e6d7a0b80947aa0acf6&language=pt-BR`
  const imageUrl = "https://image.tmdb.org/t/p/w500/"

  useEffect(() => {
    async function load() {
      try {
        const resposta = await axios.get(urlApi);
        setDetalhes(resposta.data);
        setTemporadas(resposta.data.seasons);
      } catch (erro) {
        console.log(erro);
      }
    }
    load();
  }, [urlApi]);
  
  return (
    <DetalhesContainer>

      <ButtonContainer>
        <BackButton onClick={handleClickVoltar}>
          <BackIcon className="material-icons">navigate_before</BackIcon>
          Voltar
        </BackButton>
      </ButtonContainer>

     <Hero>

      <PosterImg src={`${imageUrl}${detalhes.poster_path}`} alt="poster da série" />

      <InfoContainer>

        <Titulo>{detalhes.name}</Titulo>

        <Nota>
          <StarIcon className="material-icons">star</StarIcon>
          {detalhes.vote_average.toFixed(1)}
        </Nota>

        <Description>
          <Paragrafo>
            {detalhes.overview}
          </Paragrafo>
        </Description>

      </InfoContainer>
     
     </Hero>

     <Temporadas>
      <Subtitulo>Temporadas</Subtitulo>
      {temporadas.map((temporada) => (
      <CardTemporada temporada={temporada} />
      ))}
     </Temporadas>

    </DetalhesContainer>
  )
}

export default Detalhes;