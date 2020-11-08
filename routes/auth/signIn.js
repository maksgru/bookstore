const models = require("../../database/models");
const bCrypt = require("bcryptjs");
const updateTokens = require('./authHelper');


const User = models.User;

const signIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email) return res.status(400).json({message: 'invalid login data'})
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
  user = {
    userName: user.name,
    iconUrl: user.userImg
  }
  res.json({ user , tokens });
};

module.exports = signIn;