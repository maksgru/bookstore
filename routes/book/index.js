const express = require("express");
const getAllBooks = require("./getAllBooks");
const getBook = require("./getBook");
const patchBook = require("./patchBook");
const sortBooks = require('./sortBooks');

const router = express.Router();

router.get("/", getAllBooks);
router.get("/id", getBook);
router.patch("/id", patchBook);

router.get('/sort', sortBooks);

module.exports = router;
