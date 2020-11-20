const models = require("../../database/models");
const bcrypt = require("bcryptjs");
const updateTokens = require("./authHelper");



const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) return res.status(400).json({ message: "invalid login data" });

    const user = await models.User.findOne({ where: { email: email } });
    if (!user) return res.status(404).json({ message: "user not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "incorrect password" });

    const tokens = await updateTokens(user.id);
    const userData = {
      id: user.id,
      userName: user.name,
      iconUrl: user.userImg,
    };
    res.json({ userData, tokens });
  } catch (err) {
    res.status(500).json({ message: "server error, please try again" });
  }
};

module.exports = signIn;
