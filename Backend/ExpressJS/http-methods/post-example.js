module.exports = (app) => {
  // This could be data fetched from a database in a real application
  let users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Sara Lee", email: "sara@example.com" },
  ];

  // adding new user
  // POST route to add a new user
  app.post("/users", (req, res) => {
    const newUser = req.body;
    console.log(">>>", newUser);
    // Check if the required fields are present
    if (!newUser || !newUser.name || !newUser.email) {
      return res.status(400).json({ error: "Name and email are required." });
    }

    // Assign a new ID based on the current users array length
    newUser.id = users.length + 1;

    users.push(newUser); // Add the new user to the users array
    res.status(201).json(newUser); // Send the newly created user as the response
  });
};
