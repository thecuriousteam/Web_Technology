module.exports = (app) => {
  app.delete("/users/:id", (req, res) => {
    let users = [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
      { id: 3, name: "Sara Lee", email: "sara@example.com" },
    ];

    // get the user id
    const userId = parseInt(req.params.id);

    // find index
    const userIndex = users.findIndex((u) => u.id === userId);
    console.log(">>> User Index: ", userIndex);

    // delete logic
    if (userIndex !== -1) {
      // index to delete & number of count
      users.splice(userIndex, 1);
      res
        .status(200)
        .send({ message: "User Deleted Successfully", record: users });
    } else {
      res.status(404).send({ message: "User Not Found" });
    }
  });
};
