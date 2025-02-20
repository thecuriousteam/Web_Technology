import axios from "axios";

// setting backendpoint base url
const baseUrl = "http://localhost:5000";

// axios for signup

export const signUpUser = async (username, password) => {
	const response = await axios.post(`${baseUrl}/iap/signup`, {
		username,
		password,
	});
	return response.data;
};

export const loginUser = async (username, password) => {
	const response = await axios.post(`${baseUrl}/iap/login`, {
		username,
		password,
	});

	return response.data;
};
