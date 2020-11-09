const bcrypt = require("bcryptjs");
const models = require('../../database/models');

const User = models.User;

const signUp = async (req, res) => {
try {
  const { name, email, password } = req.body;
  console.log('user',name, email, password)
// 1) check if email exists

const candidate = await User.findOne({where: {email: email}});
console.log(candidate)
if (candidate) {
  res.status(400).json({message: 'Email allready used'});
}
const passwordHash = bcrypt.hashSync(password, 10)
console.log('pass', passwordHash)
await User.create({name: name, email: email, userImg: '', password: passwordHash});

// 2) create access token and put it to cookie or go to login
res.json({message: "User created"});
} catch (err) {
  res.status(500).json({message: 'server error, please try again', err})
}
};

module.exports = signUp;