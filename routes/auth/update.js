require("dotenv").config();
const jwt = require("jsonwebtoken");
const models = require("../../database/models");

const User = models.User;
const jwtSecret = process.env.JWT_SECRET;

const updateUserData = async (req, res) => {

  const authHeader = req.get("Authorization");
  const token = authHeader.replace('Bearer ', '');

    let payload;
    try {
        payload = jwt.verify(token, jwtSecret);
      } catch (err) {
        if (err instanceof jwt.TokenExpiredError) {
          res.status(401).json({message: 'Token expired'});
          return;
        }
        if (err instanceof jwt.JsonWebTokenError) {
          res.status(401).json({message: 'Invalid token.'});
          return;
        }
      }
      const userId = +payload.userId;
      let user;
      try {
        user = await User.findOne({ where: { id: userId } });
      } catch (error) {
        return res.status(401).json({ message: error.message });
      }
      user = {
        userName: user.name,
        iconUrl: user.userImg
      }
    res.json(user)
};

module.exports = updateUserData;