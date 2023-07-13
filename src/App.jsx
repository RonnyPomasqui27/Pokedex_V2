import { HashRouter, Route, Routes } from 'react-router-dom'
import './styles/App.css'
import BackgroundPoke from './components/BackgroundPoke'
import Login from './components/Login'
import Pokemons from './components/Pokemons'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokemons' element={<Pokemons />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
