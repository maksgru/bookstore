const bcrypt = require("bcryptjs");
const models = require("../../database/models");

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const candidate = await models.User.findOne({ where: { email: email } });

    if (candidate) {
      res.status(400).json({ message: "Email already used" });
    }
    const passwordHash = bcrypt.hashSync(password, 10);
   
    await models.User.create({
      name: name,
      email: email,
      userImg: "",
      password: passwordHash,
    });
    res.json({ message: "User created" });
  } catch (err) {
    res.status(500).json({ message: "server error, please try again", err });
  }
};

module.exports = signUp;
