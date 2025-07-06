const mongoose = require("mongoose");

const url =
  "mongodb+srv://adishukla8765:yArBJQFJF8Ku1wqy@cluster0.wenyphg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connection = async () => {
  return mongoose.connect(url);
};

module.exports = connection;
