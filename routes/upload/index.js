const express = require('express');
const router = express.Router();
const addUserAvatar = require('./addUserAvatar');
const addBookAvatar = require('./addBookAvatar');

router.post("/userimg", addUserAvatar);

module.exports = router;