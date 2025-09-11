const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env");

function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
}

module.exports = { generateToken };

