const prisma = require("../config/database");

exports.getBids = async (req, res) => {
  const bids = await prisma.bid.findMany();
  res.json(bids);
};

exports.createBid = async (req, res) => {
  const bid = await prisma.bid.create({ data: req.body });
  res.json(bid);
};

