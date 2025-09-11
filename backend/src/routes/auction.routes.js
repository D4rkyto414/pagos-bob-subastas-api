const express = require("express");
const router = express.Router();
const auctionController = require("../controllers/auction.controller");

router.get("/", auctionController.getAuctions);
router.post("/", auctionController.createAuction);

module.exports = router;

