require("dotenv").config();
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");

  if (!authHeader) {
    res.status(401).json({message: 'Access denied.'});
    return;
  };

  const token = authHeader.replace('Bearer ', '');

  try {
    const payload = jwt.verify(token, jwtSecret);
    if (payload.type !== 'access') {
      return res.status(401).json({message: 'Invalid token'});
    }
    req.userId = payload.userId;
    next();
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      return res.status(401).json({message: 'Token expired'});
    }
    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({message: 'Invalid token.'});
    }
    return res.status(500).json({message: err.message});
  }
};
