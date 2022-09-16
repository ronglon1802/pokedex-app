import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import PokemonDetail from './pages/Detail/PokemonDetail';
import MainLayout from './components/Layouts/MainLayout';
import Search from './pages/Search/Search';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='/:type' element={<Home />} />
            <Route path='pokemon-detail/:id' element={<PokemonDetail />} />
            <Route path='search/:url' element={<Search />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
