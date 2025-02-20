import React, { useState } from "react";

const StringUseStateExampleWithoutUserInput = () => {
	const [switchState, setSwitchState] = useState("");

	// store state
	const storeValue = () => {
		setSwitchState("Switch is on state");
	};

	// update state
	const updateValue = () => {
		setSwitchState("Switch is in input state");
	};

	// reset state
	const resetState = () => {
		setSwitchState("");
	};

	return (
		<div>
			<div>
				<h1>Switch State: {switchState || "Waiting for input"}</h1>

				<div className="space-x-3">
					<button onClick={storeValue}>Store</button>
					<button onClick={updateValue}>Update</button>
					<button onClick={resetState}>Reset</button>
				</div>
			</div>
		</div>
	);
};

// Using onChange with event.target.value as separate 
const StringUseStateExampleWithUserInput_Way_1 = () => {
	const [switchState, setSwitchState] = useState("");

	// way one of setting input
	const handleInputChange = (event) => {
		setSwitchState(event.target.value); //store and update
	};

	// clear user input
	const clearState = () => {
		setSwitchState("");
	};

	return (
		<div>
			<div>
				<h1>Current State: {switchState || "Waiting for input"}</h1>
				<input
					type="text"
					value={switchState}
					onChange={handleInputChange}
					placeholder="Enter Switch State: "
				/>

				<button onClick={clearState}>Clear State</button>
			</div>
		</div>
	);
};

// Using onInput Instead of onChange
const StringUseStateExampleWithUserInput_Way_2 = () => {
	const [switchState, setSwitchState] = useState("");

	// clear user input
	const clearState = () => {
		setSwitchState("");
	};

	return (
		<div>
			<div>
				<h1>Current State: {switchState || "Waiting for input"}</h1>
				<input
					type="text"
					value={switchState}
					onInput={(event) => setSwitchState(event.target.value)}
					placeholder="Enter Switch State: "
				/>

				<button onClick={clearState}>Clear State</button>
			</div>
		</div>
	);
};

// Using onChange in inline arrow function
const StringUseStateExampleWithUserInput_Way_3 = () => {
	const [switchState, setSwitchState] = useState("");

	// clear user input
	const clearState = () => {
		setSwitchState("");
	};

	return (
		<div>
			<div>
				<h1>Current State: {switchState || "Waiting for input"}</h1>
				<input
					type="text"
					value={switchState}
					onChange={(event) => setSwitchState(event.target.value)}
					placeholder="Enter Switch State: "
				/>

				<button onClick={clearState}>Clear State</button>
			</div>
		</div>
	);
};

const StringUseStateExample = () => {
	return (
		<div>
			<StringUseStateExampleWithoutUserInput />

			<StringUseStateExampleWithUserInput_Way_1 />

			<StringUseStateExampleWithUserInput_Way_2 />

			<StringUseStateExampleWithUserInput_Way_3 />
		</div>
	);
};

export default StringUseStateExample;
