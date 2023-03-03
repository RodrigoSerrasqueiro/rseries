import Card from "../../components/Cards/card";
import axios from "axios";
import { useEffect, useState } from "react";
import { format } from 'date-fns'
import { BuscaContainer, BuscaH1 } from "./style";
import { useSearch } from "../context/context";

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
}

function Busca() {
  const { searchTerm } = useSearch();
  const [series, setSeries] = useState<Serie[]>([]);
  const [urlApi, setUrlApi] = useState<string>('');

  

  useEffect(() => {
    setUrlApi(`https://api.themoviedb.org/3/search/tv?api_key=05bf1a24dee1036c89b30cfb15b0997f&language=pt-BR&query=${searchTerm}`);
  }, [searchTerm]);

  useEffect(() => {
    async function load() {
      try {
        const resposta = await axios.get(urlApi);
        setSeries(resposta.data.results);
      } catch (erro) {
        console.log(erro);
      }
    }
    load();
  }, [urlApi]);

  return (
    <div>
      <BuscaH1>Faça uma busca da sua série favorita</BuscaH1>
      <BuscaContainer>
        {series.map((serie) => {
          const dataFormatada = format(new Date(serie.first_air_date), 'dd/MM/yyyy');
          return (
            <Card
              titulo={serie.name}
              nota={serie.vote_average.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 }).replace(',', '.')}
              lancamento={dataFormatada}
              poster={serie.poster_path}
              key={serie.id}
              chave={serie.id}
            />
          )
        })}
      </BuscaContainer>
    </div>
  )
}

export default Busca;
