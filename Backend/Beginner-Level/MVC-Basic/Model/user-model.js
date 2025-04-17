// start from here

/*

Note
Model: Validates the data further (e.g., checks for existing email), hashes the password, and saves the user to the database.

mongodb+srv://gnnandan7:6WWbfvABePoFh13Z@iap-learning.eokcb.mongodb.net/?retryWrites=true&w=majority&appName=IAP-Learning
*/
// Install dependencies: express, node-localstorage
const express = require("express");
const { LocalStorage } = require("node-localstorage");

// initialize the local storage

const localStorage = new LocalStorage("./scratch");

// user model
class userModel {
	// we will have all data and business logic

	// static method to get all users
	static getAllUsers() {
		// check user is there in local store or not
		const users = localStorage.getItem("users");
		return users ? JSON.parse(users) : [];
	}

	// static method to add new users
	static addUser(user) {
		const users = this.getAllUsers();
		users.push(user);
		localStorage.setItem("users", JSON.stringify(users));
		return user;
	}

	// static method to fetch user by id
	static getUserById(id) {
		const users = this.getAllUsers();
		const findUser = users.find((each_user) => each_user.id === id);
		return findUser;
	}
}

module.exports = userModel;
