const express = require('express');
const router = express.Router();
const addUserAvatar = require('./addUserAvatar');
const addBookImage = require('./addBookImage');
const isAuth = require("../../middleware/auth");

router.post("/userimg", isAuth, addUserAvatar);
router.post('/image', isAuth, addBookImage)

module.exports = router;