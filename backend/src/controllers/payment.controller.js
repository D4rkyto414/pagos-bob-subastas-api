const prisma = require("../config/database");

exports.getPayments = async (req, res) => {
  const payments = await prisma.payment.findMany();
  res.json(payments);
};

exports.createPayment = async (req, res) => {
  const payment = await prisma.payment.create({ data: req.body });
  res.json(payment);
};

