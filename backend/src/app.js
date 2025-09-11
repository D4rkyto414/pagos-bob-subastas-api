const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const userRoutes = require("./routes/user.routes");
const auctionRoutes = require("./routes/auction.routes");
const bidRoutes = require("./routes/bid.routes");
const paymentRoutes = require("./routes/payment.routes");

const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Rutas
app.use("/api/users", userRoutes);
app.use("/api/auctions", auctionRoutes);
app.use("/api/bids", bidRoutes);
app.use("/api/payments", paymentRoutes);

// Manejo de errores
app.use(errorMiddleware);

module.exports = app;

