const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const bookRoutes = require("./routes/book");
const uploadRoutes = require("./routes/upload")
const isAuth = require("./middleware/auth");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

app.use("/auth", authRoutes);
app.use("/books", bookRoutes);
app.use("/upload", isAuth, uploadRoutes);

app.listen(4000, () => console.log("server started"));
