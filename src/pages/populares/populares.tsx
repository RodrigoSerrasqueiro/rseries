import Card from "../../components/Cards/card";
import axios from "axios";
import { useEffect, useState} from "react";
import { PopularContainer } from "./style";
import {format} from 'date-fns'

interface Serie {
  backdrop_path: string
  first_air_date: string
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: any
  vote_count: number
  chave: number
}


function Populares() {

  const [series, setSeries] = useState<Serie[]>([]);
  const apiUrl = `https://api.themoviedb.org/3/tv/popular?api_key=05bf1a24dee1036c89b30cfb15b0997f&language=pt-BR&page=1`

  useEffect(() => {
    load()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 

  
  async function load() {
    try {
      const resposta = await axios.get(apiUrl);
      setSeries(resposta.data.results)
    } 
    catch (erro) {
      console.log(erro);
    }
  }


  return (
    <PopularContainer>
      {series.map((serie) => {
        const dataFormatada = format(new Date(serie.first_air_date), 'dd/MM/yyyy');
        return (
            <Card 
            titulo={serie.name}
            nota={serie.vote_average.toLocaleString('pt-BR', {minimumFractionDigits: 1}).replace(',', '.')}
            lancamento={dataFormatada}
            poster={serie.poster_path}
            key={serie.id}
            chave={serie.id}
            />
        )
      })}
    </PopularContainer>
  )
}

export default Populares;