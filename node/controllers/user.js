const userModel = require("../models/user");

const getAllUsers = async (req, res) => {
  const allusers = await userModel.find({});

  res.status(200).json({
    message: "all users fetched",
    allusers,
  });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userModel.findById(id);
  res.status(200).json({
    message: "user fetched",
    user,
  });
};

const createUser = async (req, res) => {
  const { first_name, last_name, email, gender } = req.body;
  const user = await userModel.create({ first_name, last_name, email, gender });
  res.status(201).json({
    message: "user created",
    user,
  });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, gender } = req.body;
  const user = await userModel.findByIdAndUpdate(id, {
    first_name,
    last_name,
    email,
    gender,
  });
  res.status(200).json({
    message: "user updated",
    user,
  });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await userModel.findByIdAndDelete(id);
  res.status(200).json({
    message: "user deleted",
    user,
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
