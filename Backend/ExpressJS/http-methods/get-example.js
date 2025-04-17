module.exports = (app) => {
  // This could be data fetched from a database in a real application
  let users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Sara Lee", email: "sara@example.com" },
  ];

  app.get("/users", (req, res) => {
    res.json(users);
  });
};
