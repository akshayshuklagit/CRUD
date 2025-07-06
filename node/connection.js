const mongoose = require("mongoose");

const url =
  "mongodb";

const connection = async () => {
  return mongoose.connect(url);
};

module.exports = connection;
