const express = require("express");
const getReviews = require('./getReviews');
const setReview = require('./setReview')

const router = express.Router();

router.get('/', getReviews);
router.post('/', setReview);

module.exports = router;
