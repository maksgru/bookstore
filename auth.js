require("dotenv").config();
const bCrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const models = require("./database/models");
const authHelper = require("./authHelper");

const jwtSecret = process.env.JWT_SECRET;

const User = models.User;
const Token = models.Token;

const updateTokens = async (userId) => {
  const accessToken = authHelper.generateAccessToken(userId);
  const refreshToken = authHelper.generateRefreshToken();
  try {
    await authHelper.updateDbRefreshToken(refreshToken.id, userId);
  } catch (error) {
    console.log("token has not been updated", error.message);
  }
  return {
    accessToken,
    refreshTokentoken: refreshToken.token,
  };
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  let user;
  try {
    user = await User.findOne({ where: { email: email } });
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
  if (!user) return res.status(401).json({ message: "user not found" });

  // bcrypt compare IS NEEDED
  let tokens;
  try {
    tokens = await updateTokens(user.id);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
  res.json(tokens);
};

const refreshTokens = async (req, res) => {
  const { refreshToken } = req.body;
  let payload;
  try {
    payload = jwt.verify(refreshToken, jwtSecret);
    if (payload.type !== "refresh") {
      return res.staus(400).json({ message: "Invalid token" });
    }
    const token = await Token.findOne({ where: { tokenId: payload.id } });

    if (!token) throw new Error("Invalid token");

    const tokens = await updateTokens(token.userId)
    return res.json(tokens);
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      return res.status(400).json({ message: "Token expired" });
    } else if (err instanceof jwt.JsonWebTokenError) {
      return res.status(400).json({ message: "Invalid token" });
    }
    return res.status(400).json({ message: err.message })
  }
};

module.exports = {
  signIn,
  refreshTokens,
};
