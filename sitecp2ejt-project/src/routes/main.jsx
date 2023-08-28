import Home from "../components/Home";
import Header from "../components/Header";
import Servicos from "../components/Servicos";
import Sobre from "../components/Sobre";
import Portifolio from "../components/Portfolio";
import MVV from "../components/MVV";
import Contatos from "../components/Contatos";
import Rodape from "../components/Rodape";


export default function Main() {
	return (
		<>
			<Header />
			<Home />
			<Servicos />
			<Portifolio />
			<Sobre />
			<MVV />
			<Contatos />
			<Rodape />
		</>
	);
}
