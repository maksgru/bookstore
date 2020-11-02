const express = require('express');
const bodyParser = require('body-parser');
const models = require('./database/models');

// models.User.create({name: 'maks', email: 'qw@qw.we', password: '123qwe'})
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
	
const urlencodedParser = bodyParser.urlencoded({extended: false});
const app = express();
app.use(bodyParser.json());
app.use(urlencodedParser);

app.post('/auth/register', (req, res) => {
    const { name, email, password } = req.body;
    models.User.create({name, email, password});
    res.json({message: "User created"});
});

app.post('/auth/login', async (req, res) => {
    const { email, password } = req.body;
    const data = await models.User.findOne({ where: {email: email}})
    res.json(data);
});



app.listen(4000, () => console.log('server started'));