const express = require('express');
const randoKey = require('random-key');
const path = require('path');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {User} = require('./models/user');

const app = express();

app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(bodyParser.json());

app.post('/login', (req,res) => {
    User.findOne({user_name:req.body.user_name}, (err, user) => {
        if (user){
            if (user.password === req.body.password){
                res.send({message:`Welcome back ${user.user_name} this is your api_key: \n ${user.api_key} `});
            } else {
                res.send({message:'Wrong password!'});
            }
        } else {
            let user = new User({
                user_name : req.body.user_name,
                password : req.body.password,
                api_key: randoKey.generate(10)
            });
            user.save().then((doc) => {        
                res.send({message:`Welcome ${user.user_name} this is your private api_key: \n ${user.api_key} `});
            }, (e) => {
                res.status(400).send(e);
            })  
        }
    })   
});

app.get('/',(req,res) =>{
    res.send('<h1>Hello world!</h1>');
});

app.listen(5000,() =>{
    console.log('App is running');       
});