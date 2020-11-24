const express = require('express');
const router = express.Router();
const addUserAvatar = require('./addUserAvatar');
const addBookImage = require('./addBookImage');

router.post("/userimg", addUserAvatar);
router.post('/image', addBookImage)

module.exports = router;