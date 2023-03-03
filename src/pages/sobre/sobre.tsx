import { SobreContainer, SobreParagrafo, SobreTitulo, Creditos, Link } from "./style"

function Sobre() {
  return (
    <SobreContainer>
      <SobreTitulo>Sobre</SobreTitulo>
      <SobreParagrafo>Essa é uma aplicação <b>React</b> em <b>Typescript</b> que traz diversas informações sobre séries de TV. O nome RSéries remete à sigla do meu nome: Rodrigo Serrasqueiro - R.S. Para acessar essas informações utilizei a API do <Link href="https://www.themoviedb.org/" target="_blank" rel="noreferrer"><b>tmdb.org</b></Link>. Nesse projeto usei Styled Components para ampliar as opções de estilo dinâmico, o pacote React Router Dom para criar rotas de navegação entre as páginas, hooks nativos do React como useState, useEffect e useContext que foram fundamentais para as requisições feitas à API, principalemte nas páginas de Busca e Detalhes. Também foram utilizados axios, async e await para melhor performance. Totalmente responsiva, com design moderno e interativo, essa aplicação ainda pode melhorar muito. A ideia é construir uma API Rest para armazenar dados dos usuários como login, senha, configurações personalizadas, favoritos, etc. Foi um grande desafio trabalhar nesse projeto e me trouxe muito aprendizado.    
      </SobreParagrafo>
      <Creditos>&copy; Rodrigo Serrasqueiro</Creditos>
    </SobreContainer>
  )
}

export default Sobre;