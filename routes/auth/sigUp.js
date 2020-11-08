const models = require('./database/models');

const User = models.User;

const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  // 1) check if email exists
  await User.create({name, email, password});
  
  // 2) create access token and put it to cookie or go to login
  res.json({message: "User created"});
};

module.exports =  signUp;