import react, { useState } from "react";
import "./index.css"; // Ensure this is the correct path to your CSS file
import JSXBasics from "./Pages/JSX_Basics";
import Project_Basics from "./Pages/Project_Basics";

function App() {
	const [input, setInput] = useState("");

	return (
		<>
			<div>
				<h1 className="text-[20px] font-mono text-center p-5  ">
					Learning React Concepts
				</h1>

				<div className="p-2 flex-col">
					{/* conditional rendering */}
					<h1 className="text-center font-bold">
						Select the radio button: (Project, Learning Concepts)
					</h1>

					<div className="flex gap-2 p-2 justify-center items-center">
						<div className="flex gap-2 justify-center items-center p-2">
							<input
								type="radio"
								id="Learning"
								name="conceptSelection"
								value="Learning"
								checked={input === "Learning"}
								onChange={(event) => setInput(event.target.value)}
							/>
							<label htmlFor="Learning">Learning Button</label>
						</div>
						<div className="flex gap-2 justify-center items-center p-2">
							<input
								type="radio"
								value="Project"
								checked={input === "Project"}
								onChange={(event) => setInput(event.target.value)}
							/>
							<label htmlFor="Project">Project Button</label>
						</div>
					</div>

					{/* conditional rendering logic */}
					{input === "Learning" ? (
						<JSXBasics />
					) : input === "Project" ? (
						<Project_Basics />
					) : (
						""
					)}
				</div>
				{/* concepts */}

				{/* <JSXBasics /> */}

				{/* <Project_Basics /> */}
			</div>
		</>
	);
}

export default App;
