const models = require("../../database/models");
const bcrypt = require("bcryptjs");
const updateTokens = require("./authHelper");

const User = models.User;

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) return res.status(400).json({ message: "invalid login data" });

    const user = await User.findOne({ where: { email: email } });
    if (!user) return res.status(404).json({ message: "user not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "incorrect password" });

    const tokens = await updateTokens(user.id);
    userData = {
      userName: user.name,
      iconUrl: user.userImg,
    };
    res.json({ userData, tokens });
  } catch (err) {
    res.status(500).json({ message: "server error, please try again" });
  }
};

module.exports = signIn;
