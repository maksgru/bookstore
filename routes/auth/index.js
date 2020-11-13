const express = require('express');
const refreshTokens = require('./refreshTokens');
const signIn = require('./signIn')
const authMiddleware = require('../../middleware/auth');
const updateUserData = require('./update');
const signUp = require('./sigUp');

const router = express.Router();

router.post('/signin', signIn);
router.post('/signup', signUp);
router.post('/refresh-tokens', refreshTokens);
router.post('/update', authMiddleware, updateUserData);

module.exports = router;