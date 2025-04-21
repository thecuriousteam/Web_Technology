const mongoose = require("mongoose");

const DBConnection = async () => {
  try {
    // initiate moongose connection
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully 🚀🚀");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process with failure
  }
};

// connection can also be done through promise
// const db = mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("Mongo Db Connected Successfully"))
//   .catch((err) => console.log(err));

module.exports = DBConnection;
