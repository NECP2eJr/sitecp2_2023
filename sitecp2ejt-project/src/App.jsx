import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Servicos from './components/Servicos'
import Sobre from './components/Sobre'
import Portifolio from './components/Portfolio'


function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Servicos />
      <Portifolio />
      <Sobre />
    </>
  )
}

export default App
