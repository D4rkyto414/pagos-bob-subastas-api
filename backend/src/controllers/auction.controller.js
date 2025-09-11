const prisma = require("../config/database");

exports.getAuctions = async (req, res) => {
  const auctions = await prisma.auction.findMany();
  res.json(auctions);
};

exports.createAuction = async (req, res) => {
  const auction = await prisma.auction.create({ data: req.body });
  res.json(auction);
};

