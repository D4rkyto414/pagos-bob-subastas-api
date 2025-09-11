const prisma = require("../config/database");

exports.getUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

exports.createUser = async (req, res) => {
  const user = await prisma.user.create({ data: req.body });
  res.json(user);
};

