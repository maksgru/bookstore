const express = require("express");
const getAllBooks = require("./getAllBooks");
const getBook = require("./getBook");
const patchBook = require("./patchBook");
const createBook = require("./createBook");
const isAuth = require("../../middleware/auth");
const router = express.Router();

router.get("/", getAllBooks);
router.get("/id", getBook);
router.post('/',isAuth, createBook);
router.patch("/id", patchBook);

module.exports = router;
