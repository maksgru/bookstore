const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const bookRoutes = require("./routes/book");
const favoriteRoutes = require("./routes/favorites");
const uploadRoutes = require("./routes/upload")
const isAuth = require("./middleware/auth");
const getData = require('./routes/book/getData');
const reviewRoutes = require('./routes/review');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

app.use("/", isAuth);
app.use("/auth", authRoutes);
app.use("/books", bookRoutes);
app.use("/upload", uploadRoutes);
app.use('/favorites', favoriteRoutes);
app.use('/review', reviewRoutes);

app.get('/data', getData);


app.listen(4000, () => console.log("server started"));
