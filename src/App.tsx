import Header from './components/Header/header';
import 'C:/Users/Rodrigo/Desktop/Projects/reactJS/rseriesType/src/App.css'
import MaisVotadas from './pages/maisvotadas/maisvotadas';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom'
import Sobre from './pages/sobre/sobre';
import Busca from './pages/busca/busca';
import Populares from './pages/populares/populares';
import { SearchProvider } from './pages/context/context';
import Lancamentos from './pages/lancamentos/lancamentos';
import Detalhes from './pages/detalhes/detalhes';
import { GlobalProvider } from './pages/context/apicontext';

function App() {
  return (
    <GlobalProvider>
      <SearchProvider>
        <div className='App'>
          <div className='navigation-links'>
            <BrowserRouter>

              <Header />
              <div className="links-container">
                <NavLink className='link-pages' to='/maisvotadas'>Mais votadas</NavLink>
                <NavLink className='link-pages' to='/populares'>Populares</NavLink>
                <NavLink className='link-pages' to='/lancamentos'>Lançamentos</NavLink>
                <NavLink className='link-pages' to='/busca'>Busca</NavLink>
                <NavLink className='link-pages' to='/sobre'>Sobre</NavLink>
              </div>

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
          </div>
        </div>  
      </SearchProvider>
    </GlobalProvider>
  );
}

export default App;
