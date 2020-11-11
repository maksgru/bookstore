const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth/authRoutes");
const bookRoutes = require("./routes/book/bookRoutes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

app.use("/auth", authRoutes);
app.use("/books", bookRoutes);
app.use("/upload", uploadRoutes);

app.listen(4000, () => console.log("server started"));
