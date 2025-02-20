import React from "react";

// simple class component example
class Example1 extends React.Component {
	// class component should contain render menthod to show in ui
	render() {
		return <div>This is simple example for Class Component</div>;
	}
}

// class component with state
class Example2 extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			message: "Hello React",
		};
	}

	render() {
		return (
			<div>
				<h1>This is another example which uses state inside class component</h1>

				<p>{this.state.message}</p>
			</div>
		);
	}
}

// class component example with change of state
class Example3 extends React.Component {
	constructor(props) {
		super(props);

		// inside state the values will be objects
		this.state = {
			count: 0,
		};
	}

	increment = () => {
		// on each increment we need to set the state=
		this.setState({
			// we need to update the state of count
			count: this.state.count + 1,
		});
	};

	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.increment}>Increment</button>
			</div>
		);
	}
}

class Counter extends React.Component {
	constructor(props) {
		super(props);

		// state initialization
		this.state = {
			count: 0,
		};
	}

	increment = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};

	decrement = () => {
		this.setState({
			count: this.state.count - 1,
		});
	};

	render() {
		return (
			<div>
				<h1 className="p-2">Count: {this.state.count}</h1>

				<button onClick={this.increment} className="p-2">
					Increment
				</button>
				<button onClick={this.decrement} className="p-2">
					Decrement
				</button>
			</div>
		);
	}
}

class Toggle extends React.Component {
	constructor(props) {
		super(props);

		// lets initialize the state
		this.state = {
			isOn: true,
		};
	}

	// method to change the state
	toggle = () =>
		// change of state
		this.setState(
			// present state is ON below code changes the state to OFF on button click
			(prevState) => ({ isOn: !prevState.isOn })
		);
	// we need to render the changes in UI

	render() {
		return (
			<div>
				<h1>{this.state.isOn ? "ON" : "OFF"}</h1>

				<button onClick={this.toggle}>Toggle</button>
			</div>
		);
	}
}

// dynamically display name by taking input

class DynamicNameGenerator extends React.PureComponent {
	constructor(props) {
		super(props);

		// setting initial state
		this.state = {
			// initially state will be empty
			name: "",
		};
	}

	dynamicName = (event) =>
		this.setState({
			// Update state with input value which is coming from input tag
			name: event.target.value,
		});

	render() {
		return (
			<div>
				<h1>Please Enter Your Name: </h1>
				<input
					type="text"
					placeholder="Enter Your Name"
					value={this.state.name}
					onChange={this.dynamicName}
				/>
				<h2>Hello {this.state.name || "stranger"}!</h2>
			</div>
		);
	}
}

// todo list project
class TodoList extends React.Component {
	constructor(props) {
		super(props);

		// creating states
		this.state = {
			task: "",
			tasks: [],
		};
	}

	// handle change in input

	handleChange = (event) => {
		this.setState({ task: event.target.value });
	};

	// add tasks
	addTask = () => {
		// check if the tasks is empty
		if (this.state.task.trim()) {
			this.setState((prevState) => ({
				tasks: [...prevState.tasks, prevState.task],
				task: "",
			}));
		}
	};

	render() {
		return (
			<div>
				<h1>Enter the tasks:</h1>
				<input
					type="text"
					placeholder="Enter the task..."
					value={this.state.task}
					onChange={this.handleChange}
				/>

				<button onClick={this.addTask}>Add Task</button>

				{/* display task using map */}
				<ul>
					{this.state.tasks.map((task, index) => (
						<li key={index}>{task}</li>
					))}
				</ul>
			</div>
		);
	}
}

class TodoListLearnt extends React.Component {
	constructor(props) {
		super(props);

		// state initialization
		this.state = {
			task: "",
			taskList: [],
		};
	}

	// handling change of state
	handleChange = (event) => this.setState({ task: event.target.value });

	// handling add task

	addTask = () => {
		// check if task is not empty
		if (this.state.task.trim()) {
			// update the task to the list
			this.setState((prevTask) => ({
				taskList: [...prevTask.taskList, prevTask.task],

				// resetting task value
				task: "",
			}));
		}
	};

	// now render to ui
	render() {
		return (
			<div className="flex-col justify-center items-center w-[1000px] space-y-4">
				<div className="p-2 flex gap-2 justify-center items-center">
					<div>
						<h1 className="text-xl font-mono">Enter the Task In Input: </h1>
					</div>
					<div>
						<input
							type="text"
							placeholder="Enter the task..."
							value={this.state.task}
							onChange={this.handleChange}
							className="border-[2px] border-slate-200 p-2 rounded-xl w-[500px]"
						/>
					</div>

					<div>
						<button
							onClick={this.addTask}
							className="p-2 font-mono text-white bg-[#8800ff] rounded-xl hover:bg-[#9500ff] w-[100px]">
							Add Task
						</button>
					</div>
				</div>

				{/* tasks board */}
				<div className="p-10 flex gap-2 justify-start items-start border-2 border-slate-200 rounded-lg h-[400px] overflow-y-scroll">
					{/* tasks list */}

					<div>
						<ul>
							{this.state.taskList.map((task, index) => (
								<li key={index} className="p-2 bg-yellow-200 m-2 rounded-xl">
									<div className="p-2">{task}</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

// react js revamp

class GreetUser extends React.Component {
	// initialize all state variables inside contructor
	constructor(props) {
		super(props);

		this.state = {
			name: "Nandan",
			message: "Hello, ",
		};
	}

	// inorder to rending the things in ui, we need render() method
	render() {
		return (
			<div>
				<h1>Name: {this.state.name}</h1>
				<h2>
					Message: {this.state.message}
					{this.state.name}
				</h2>
			</div>
		);
	}
}

const ClassComponentReact = () => {
	return (
		<div>
			{/* <h1>Start of class component</h1> */}

			<div className="flex justify-center items-center">
				{/* <Example1 />
			<Example2 />
			<Example3 />
			<Toggle />
			<DynamicNameGenerator />
			<TodoList /> */}

				{/* <div>
					<TodoListLearnt />
				</div> */}

				{/* <Counter /> */}

				<GreetUser />
			</div>
		</div>
	);
};

export default ClassComponentReact;
