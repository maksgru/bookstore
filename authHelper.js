require('dotenv').config()
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const models = require('./database/models');
const secret = process.env.JWT_SECRET;

const generateAccessToken = (userId) => {
    const payload = {
        userId,
        type: 'access'
    };
    const options = { expiresIn: process.env.ACCESS_TOKEN_EXPIRESIN };
    return jwt.sign(payload, secret, options);
};

const generateRefreshToken = () => {
    const payload = {
        id: uuidv4(),
        type: 'refresh'
    };
    const options = { expiresIn: process.env.REFRESH_TOKEN_EXPIRESIN };
    return {
        id: payload.id,
        token: jwt.sign(payload, secret, options)
    };
};
const updateDbRefreshToken = async (tokenId, userId) => {
    let token;
    try {
        token = await models.Token.findOne({ where: {userId: userId}});
        if (!token) return await models.Token.create({userId, tokenId});
    } catch (error) {
        console.log(error.message)
    }
    await token.destroy();
    await models.Token.create({userId, tokenId});
};
module.exports = {
    generateAccessToken,
    generateRefreshToken,
    updateDbRefreshToken
};