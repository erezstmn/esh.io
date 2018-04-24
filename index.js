const express = require('express');
const randoKey = require('random-key');
const path = require('path');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {User} = require('./models/user');
const {Log} = require('./models/log');

const app = express();

app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // res.header("Access-Control-Allow-Methods", "PATCH");
    next();
  });

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
app.post('/insert_logs', (req, res) => {
    User.findOne({api_key:req.body.api_key}, (err, user) => {
        if (err){            
            res.send(err);
        }
        if (user){
            let log = new Log({
                api_key: req.body.api_key,
                title: req.body.title,
                text: req.body.text
            });
            log.save().then((doc) => {
                res.send({message: 'log saved'});
            }, (e) => { res.send(e);
            })
            }
        else{
            res.status(400).send({message:'wrong api_key'});
        }
    })    
})
app.get('/get_logs', (req, res) => {
    User.findOne({api_key:req.query.api_key}, (err, user) => {
        if (err){
            res.send(err);
        }
        if (user){
            Log.find({api_key:req.query.api_key}, (err, logs) => {
                if (err){
                    res.send(err);
                }
                res.send({message:`Hello ${user.user_name}, here are your logs`,logs:logs});
            })    
        }
        else{
            res.status(400).send({message:'Wrong api_key'});    
        }
    })  
})
app.get('/',(req,res) =>{
    res.send('<h1>Hello world!</h1>');
});

app.listen(5000,() =>{
    console.log('App is running');       
});