// patch is used to update the partial data in existing data
module.exports = (app) => {
  let users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Sara Lee", email: "sara@example.com" },
  ];
  app.patch("/users/:id", (req, res) => {
    // find the userId
    const userId = parseInt(req.params.id);

    console.log("user id in patch >>>", userId);
    const updateEmail = req.body;

    // find user
    let user = users.find((u) => u.id === userId);
    if (user) {
      user.email = updateEmail;
      res
        .status(200)
        .json({ message: "Email Updated Successfully", Record: users });
    } else {
      res.status(404).send("User not found");
    }
  });
};
