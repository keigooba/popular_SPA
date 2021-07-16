import {BrowserRouter} from "react-router-dom";
import Router from "./routers/Router";
import "./styles.css";

export default function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</div>
	);
}
