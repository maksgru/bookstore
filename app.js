const express = require('express');
const bodyParser = require('body-parser');
const models = require('./database/models');
const authMiddleware = require('./middleware/auth');
const auth = require('./auth');

// models.User.create({name: 'maks', email: 'qw@qw.we', password: '123qwe'})
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
	
const urlencodedParser = bodyParser.urlencoded({extended: false});
const app = express();
app.use(bodyParser.json());
app.use(urlencodedParser);

app.get('/protected', authMiddleware, (req, res) => {
    res.json({message: "protected page"})
});

app.post('/signin', auth.signIn);
app.post('/refresh-tokens', auth.refreshTokens);


app.post('/auth/register', async (req, res) => {
    const { name, email, password } = req.body;
    // 1) check if email exists
    await models.User.create({name, email, password});
    
    // 2) create access token and put it to cookie or go to login
    res.json({message: "User created"});
});

app.post('/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await models.User.findOne({ where: {email: email}})
        /* 
        1) check if data exists
        2) comparing passwords hashes
        3) create access token and put it to cookie
        */
       res.json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});


app.listen(4000, () => console.log('server started'));