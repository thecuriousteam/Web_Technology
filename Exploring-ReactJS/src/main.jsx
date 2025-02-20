import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Ensure this is the correct path to your CSS file
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* react router */}
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
