const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth/authRoutes');

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.use('/auth', authRoutes);


app.listen(4000, () => console.log('server started'));