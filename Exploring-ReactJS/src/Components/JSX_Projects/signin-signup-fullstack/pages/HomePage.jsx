import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import {
	BiCheck,
	BiCheckboxChecked,
	BiCheckShield,
	BiLogInCircle,
} from "react-icons/bi";

// importing react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
	// get the navigate function
	const navigate = useNavigate();
	return (
		<div className="h-screen">
			<div className="space-x-2 flex max-w-[300px] mx-auto justify-center items-center">
				{/* inline arrow function */}
				<button
					onClick={() => navigate("/login")}
					className="p-2 bg-purple-700 text-white font-bold text-[18px] w-[120px] rounded-lg shadow-lg  font-mono flex justify-center items-center gap-2">
					<BiLogInCircle className="text-[25px] text-white font-bold" /> Login
				</button>

				<button
					onClick={() => navigate("signup")}
					className="p-2 bg-purple-700 text-white font-bold text-[18px] w-[120px] rounded-lg shadow-lg  font-mono flex justify-center items-center gap-2">
					<BiCheckShield className="text-[25px] text-white font-bold" /> Signup
				</button>
			</div>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>

			<ToastContainer />
		</div>
	);
};

export default HomePage;
