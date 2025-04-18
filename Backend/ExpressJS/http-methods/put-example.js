module.exports = (app) => {
  let users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Sara Lee", email: "sara@example.com" },
  ];

  // put used to update the existing data with the complete new whole data
  app.put("/users/:id", (req, res) => {
    // get the id from parms
    const userId = parseInt(req.params.id);
    const userData = req.body;
    console.log(">>> user id", userId);
    // find index is there in database or not
    const userIndex = users.findIndex((eachUser) => eachUser.id === userId);

    // check index is there or not
    if (userIndex !== -1) {
      // find the user with this index replace old data with new data
      users[userIndex] = { id: userId, ...userData };

      console.log(users[userIndex]);
      res.json(users[userIndex]);
    } else {
      res.status(404).send("User Not Found");
    }
  });
};
