import { CardTemporadaContainer, Episodio, InfoTemporada, Paragrafo1, Paragrafo2, PosterTemporada } from "./style";


function CardTemporada ({temporada}: any) {
  return(
    <CardTemporadaContainer>

      <PosterTemporada src={`https://image.tmdb.org/t/p/w200/${temporada.poster_path}`} alt="poster temporada"/>

      <InfoTemporada>

        <Episodio>{temporada.name}</Episodio>

        <Paragrafo1>{`${temporada.episode_count} Episódios`}</Paragrafo1>

        <Paragrafo2>
          {temporada.overview}
        </Paragrafo2>

      </InfoTemporada>

    </CardTemporadaContainer>
  )
}

export default CardTemporada ;