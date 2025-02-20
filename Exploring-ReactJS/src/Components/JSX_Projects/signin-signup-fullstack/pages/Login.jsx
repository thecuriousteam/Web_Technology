import React, { useState } from "react";
import { BiDotsHorizontalRounded, BiUser, BiUserCheck } from "react-icons/bi";
import { loginUser } from "../services/api";

// importing react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
	const [userData, setUserData] = useState({
		username: "",
		password: "",
	});
	const [message, setMessage] = useState("");
	// handle input changes
	const handleInputChange = (event) => {
		const { name, value } = event.target;

		// setting input data to object
		setUserData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		// check user entered username and password in input
		const { username, password } = userData;
		if (!username || !password) {
			setMessage("Please fill all details");

			toast.error("Please fill all details", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				theme: "colored",
			});
			return;
		}

		// send the data to axios
		try {
			const response = await loginUser(username, password);
			setMessage(response.message);

			toast.success("Signin Successful", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				theme: "colored",
			});
		} catch (error) {
			console.log(error);
			setMessage(error?.response?.data.message || "Error in login");
			toast.error("Something Went Wrong", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				theme: "colored",
			});
		}
	};

	return (
		<div>
			<div className="m-4">
				<div className="flex justify-center items-center gap-2 p-2 text-xl border-2 border-purple-700 rounded-lg shadow-lg max-w-[300px] mx-auto mt-5">
					<BiUser className="text-[45px] text-purple-700 font-bold " />
					<input
						type="text"
						placeholder="Enter Username"
						className="p-2 w-[300px]"
						name="username"
						value={userData.username}
						onChange={handleInputChange}
					/>
				</div>

				<div className="flex justify-center items-center gap-2 p-2 text-xl border-2 border-purple-700 rounded-lg shadow-lg max-w-[300px] mx-auto mt-5">
					<BiDotsHorizontalRounded className="text-[45px] text-purple-700 font-bold " />
					<input
						type="password"
						placeholder="Enter Password"
						className="p-2 w-[300px]"
						name="password"
						value={userData.password}
						onChange={handleInputChange}
					/>
				</div>

				<div className="max-w-[300px] mx-auto justify-center items-center flex p-2 mt-2 text-white font-bold bg-purple-700 rounded-lg">
					<BiUserCheck className="text-[35px] text-white font-bold" />
					<button
						className="flex justify-center items-center text-center font-mono p-2 "
						onClick={handleSubmit}>
						Login
					</button>
				</div>

				{message && <p className="text-center text-red-500 mt-4">{message}</p>}

				<ToastContainer />
			</div>
		</div>
	);
};

export default Login;
