const express = require('express');
const refreshTokens = require('./refreshTokens');
const signIn = require('./signIn')
const authMiddleware = require('../../middleware/auth');
const updateUserData = require('./update');

const router = express.Router();


router.post('/signin', signIn);

router.post('/refresh-tokens', refreshTokens);

router.get('/update', authMiddleware, updateUserData);

module.exports = router;