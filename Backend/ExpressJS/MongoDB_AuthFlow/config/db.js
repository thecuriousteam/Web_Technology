const mongoose = require("mongoose");

// create a connection string
const DBConnection = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully", con.connection.host);
  } catch (error) {
    console.error("Unable to connect databsse ", error.message);
  }
};

module.exports = DBConnection;
