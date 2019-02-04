const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const app = express();
let morgan = require('morgan');
let bodyParser = require('body-parser');

const { DATABASE_URL } = require('./config/database');

const PORT = process.env.PORT || 3001;

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(bodyParser());

// required for passport
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {
      res.send({message:'loginpage'});
      // render the page and pass in any flash data if it exists
     
  });

  // process the login form
  // app.post('/login', do all our passport stuff here);
  app.post('/login', (req,res)=>{
    
    passport.authenticate('local-login',function(err,user,info){
      console.log('here');
      if(err){
        res.send({error:err});
      } else if(!user){
        res.send({message:info})
      } else {
        res.send(user);
      }
      
    })(req, res);
  });

  // =====================================
  // SIGNUP ==============================
  // =====================================
  // show the signup form
  app.get('/signup', function(req, res) {
    res.send({message:'signup page'});
      // render the page and pass in any flash data if it exists
      
  });

  // process the signup form
  // app.post('/signup', do all our passport stuff here);
  app.post('/signup', (req,res)=>{
    
    passport.authenticate('local-signup',function(err,user,info){
      console.log('here');
      if(err){
        res.send({error:err});
      } else if(!user){
        res.send({message:info})
      } else {
        res.send(user);
      }
      
    })(req, res);
  });

  app.get('/profile', (req,res)=>{
    res.send({user:req.user});
  });

  function isLoggedIn(req,res,next){
    if(req.isAuthenticated())
      return next();

    res.redirect('/');
  }
  


  let server; 

  function runServer(databaseUrl = DATABASE_URL, port = PORT) {
    return new Promise((resolve, reject) => {
      mongoose.connect(databaseUrl, err => {
        if (err) {
          return reject(err);
        }
        server = app.listen(port, () => {
          console.log(`Your app is listening on port ${port}`);
          resolve();
        })
          .on('error', err => {
            mongoose.disconnect();
            reject(err);
          });
      });
    });
  }
  
  
  function closeServer() {
    mongoose.disconnect();
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  }
  
  
  if (require.main === module) {
    runServer(DATABASE_URL).catch(err => console.error(err));
  }
  
  module.exports = {app, runServer, closeServer};