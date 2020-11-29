const express = require("express");
const getFavorites = require('./getFavorites');
const addFavorites = require('./addFavorites');
const delFavorites = require('./delFavorites');

const router = express.Router();

router.get('/', getFavorites);
router.post('/', addFavorites);
router.delete('/', delFavorites);

module.exports = router;