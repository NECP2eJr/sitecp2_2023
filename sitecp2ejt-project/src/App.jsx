import "./App.css";
import Main from "./routes/main";
import ProcessoSeletivo from "./routes/processoSeletivo";
import NossaEquipeRoute from "./routes/nossaEquipe";

import { useRoutes } from "react-router-dom";

function App() {
	let element = useRoutes([
		{ path: "/", element: <Main /> },
		{ path: "/nossaequipe", element: <NossaEquipeRoute /> },
		{ path: "/processoSeletivo", element: <ProcessoSeletivo /> },
	]);

	return element;
}

export default App;
