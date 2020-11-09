const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth/authRoutes');

const models = require('./database/models');

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.use('/auth', authRoutes);

app.get('/api/books', async (req, res) => {
  let books;
  try {
    books = await models.Book.findAll();
    res.json(books)
  } catch (err) {
    res.status(500).json({ message: "server error, please try again" });
  }
});


app.listen(4000, () => console.log('server started'));