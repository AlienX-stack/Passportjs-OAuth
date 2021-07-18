const mongoose = require("mongoose");
const keys = require("./keys");

const connectDB = async () => {
  try {
    const con = await mongoose.connect(keys.mongodb.dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB connection successful`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
