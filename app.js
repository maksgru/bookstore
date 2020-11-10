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
app.get('/api/books/id', async (req, res) => {
  const id = req.query.id;
  try {
    const book = await models.Book.findOne({ where: { id: id } });
    if (!book) {
      res.status(404).json({message: 'book not found'});
      return;
    }
    bookImages = await models.Image.findAll({ where: { bookId: id }});
    if (!bookImages) {
      res.status(404).json({message: 'images not found'})
    }
    res.json({book, bookImages});
  } catch (err) {
    res.status(500).json({ message: "server error, please try again", err });
  }
});

app.listen(4000, () => console.log('server started'));