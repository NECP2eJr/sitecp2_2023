import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Servicos from './components/Servicos'
import Sobre from './components/Sobre'
import Portifolio from './components/Portfolio'
import MVV from './components/MVV'
import PS from './components/PS'
import FormularioPS from './components/FormularioPS'
import Contatos from './components/Contatos'
import Rodape from './components/Rodape'


function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Servicos />
      <Portifolio />
      <Sobre />
      <MVV/>
      <Contatos/>
      <Rodape/>

      {/* 
      <PS/>
      <FormularioPS/>
      */}
    </>
  )
}

export default App
