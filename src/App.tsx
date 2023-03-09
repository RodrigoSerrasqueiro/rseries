import Header from './components/Header/header';
import './App.css'
import './App.style'
import './GlobalStyle'
import MaisVotadas from './pages/maisvotadas/maisvotadas';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Sobre from './pages/sobre/sobre';
import Busca from './pages/busca/busca';
import Populares from './pages/populares/populares';
import { SearchProvider } from './pages/context/context';
import Lancamentos from './pages/lancamentos/lancamentos';
import Detalhes from './pages/detalhes/detalhes';
import { GlobalProvider } from './pages/context/apicontext';
import { Container, LinkPages, LinksContainer } from './App.style';

function App() {
  return (
    <GlobalProvider>
      <SearchProvider>
        <Container>
          
            <BrowserRouter>

              <Header />
              <LinksContainer>
                <LinkPages to='/maisvotadas'>Mais votadas</LinkPages>
                <LinkPages to='/populares'>Populares</LinkPages>
                <LinkPages to='/lancamentos'>Lançamentos</LinkPages>
                <LinkPages to='/busca'>Busca</LinkPages>
                <LinkPages to='/sobre'>Sobre</LinkPages>
              </LinksContainer>

              <Routes>
                <Route path='/rseries' element={<MaisVotadas />}></Route>
                <Route path='/maisvotadas' element={<MaisVotadas />}></Route>
                <Route path='/populares' element={<Populares />}></Route>
                <Route path='/lancamentos' element={<Lancamentos />}></Route>
                <Route path='/busca' element={<Busca />}></Route>
                <Route path='/sobre' element={<Sobre />}></Route>
                <Route path='/detalhes' element={<Detalhes />}></Route>
              </Routes>

            </BrowserRouter>

        </Container>  
      </SearchProvider>
    </GlobalProvider>
  );
}

export default App;
