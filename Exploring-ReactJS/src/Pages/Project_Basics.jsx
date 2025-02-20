import React from "react";
import EmpData_List from "../Components/JSX_Topics/JSX_State_StateManagement/Projects/EmpData-List";
import OrgData from "../Components/JSX_Topics/JSX_State_StateManagement/Projects/OrgData";
import ToDoList_Priority from "../Components/JSX_Topics/JSX_State_StateManagement/Projects/ToDoList_Priority";
import ToDo_Toaster from "../Components/JSX_Topics/JSX_State_StateManagement/Projects/ToDo_Toaster";
import Todo_Add_Delete from "../Components/JSX_Topics/JSX_State_StateManagement/Projects/Todo_Add_Delete";
import LoginForm_Project from "../Components/JSX_Topics/JSX_State_StateManagement/Projects/LoginForm_Project";
import WeatherLookup from "../Components/JSX_Topics/useEffectExample/Project/WeatherLookup";
import WeatherLookup_Toaster from "../Components/JSX_Topics/useEffectExample/Project/WeatherLookup_Toaster";
import HomePage from "../Components/JSX_Projects/signin-signup-fullstack/pages/HomePage";
import CuriousProducts from "../Components/JSX_Projects/Product_Functionality/CuriousProducts";
import TaskApp from "../Components/JSX_Projects/Todo_Functionality/TaskApp";

const Project_Basics = () => {
	return (
		<div className="p-5">
			{/* <h1>React Projects</h1> */}

			<div>
				{/* concepts */}
				{/* <h1>State Management Project Using List For Functional Component</h1> */}

				<div>
					{/* <EmpData_List /> */}
					{/* <OrgData /> */}

					{/* <ToDoList_Priority /> */}

					{/* <ToDo_Toaster /> */}

					{/* <Todo_Add_Delete /> */}

					{/* <LoginForm_Project /> */}

					{/* <WeatherLookup /> */}

					{/* <WeatherLookup_Toaster /> */}

					{/* <HomePage /> */}
					{/* <CuriousProducts /> */}
					<TaskApp />
				</div>
			</div>
		</div>
	);
};

export default Project_Basics;
