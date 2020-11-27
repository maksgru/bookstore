const express = require("express");
const updateBookRating = require("../../middleware/updateBookRating");
const deleteReview = require("./deleteReview");
const getReviews = require('./getReviews');
const patchReview = require("./patchReview");
const setReview = require('./setReview')

const router = express.Router();

router.get('/', getReviews);
router.post('/', setReview,);
router.patch('/', patchReview);
router.delete('/', deleteReview);

module.exports = router;
