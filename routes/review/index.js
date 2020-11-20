const express = require("express");
const getReviews = require('./getReviews');

const router = express.Router();

router.get('/', getReviews);

module.exports = router;
