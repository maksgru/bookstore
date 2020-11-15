require("dotenv").config();
const jwt = require("jsonwebtoken");
const models = require("../../database/models");
const updateTokens = require('./authHelper');

const jwtSecret = process.env.JWT_SECRET;

const refreshTokens = async (req, res) => {
  const { refreshToken } = req.body;
  console.log(refreshToken)
  let payload;
  try {
    payload = jwt.verify(refreshToken, jwtSecret);
    if (payload.type !== "refresh") {
      return res.staus(400).json({ message: "Invalid token" });
    }
    const token = await models.Token.findOne({ where: { tokenId: payload.id } });

    if (!token) return res.status(400).json({ message: err.message })
  
    const tokens = await updateTokens(token.userId)
    return res.json(tokens);
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: "Token expired" });
    } else if (err instanceof jwt.JsonWebTokenError) {
      return res.status(400).json({ message: "Invalid token" });
    }
    return res.status(400).json({ message: err.message })
  }
};

module.exports = refreshTokens;