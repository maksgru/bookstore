const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const bookRoutes = require("./routes/book");
const favoriteRoutes = require("./routes/favorites");
const uploadRoutes = require("./routes/upload")
const isAuth = require("./middleware/auth");
const getData = require('./routes/book/getData');
const reviewRoutes = require('./routes/review');
const userId = require("./middleware/userId");
const cors = require('cors');

const app = express();

const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: "*",
    credentials: true
  }
});
module.exports = io;

io.on("connection", socket => {
   console.log("New client connected" + socket.id);
    socket.on("bookCreated", (data) => {
        io.sockets.emit("newBook", {'userId': data.userId});
    });
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));
app.use('/', userId)
app.use("/auth", authRoutes);
app.use("/books", bookRoutes);
app.use("/upload", uploadRoutes);
app.use('/favorites', isAuth, favoriteRoutes);
app.use('/review', reviewRoutes);

app.get('/data', getData);



server.listen(4000, () => console.log("server started"));