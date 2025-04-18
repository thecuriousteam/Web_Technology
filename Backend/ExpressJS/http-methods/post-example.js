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
    // we will add user through API
    const newUser = req.body;
    newUser.id = users.length + 1;

    // push the new user
    users.push(newUser);
    res.status(201).json(newUser);
  });
};
