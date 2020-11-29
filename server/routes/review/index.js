const express = require("express");
const deleteReview = require("./deleteReview");
const getReviews = require('./getReviews');
const patchReview = require("./patchReview");
const setReview = require('./setReview')
const isAuth = require('../../middleware/auth');

const router = express.Router();

router.get('/', getReviews);
router.post('/', isAuth, setReview,);
router.patch('/', isAuth, patchReview);
router.delete('/', isAuth, deleteReview);

module.exports = router;
