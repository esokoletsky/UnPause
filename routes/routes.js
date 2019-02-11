const User = require('../models/user');


module.exports = function(app, passport) {
/////////// Get Endpoints ///////////////////
    app.get('/', function (req, res) {
        res.render('index.html', {user:false});
    });

    app.get('/users', (req, res) => {
        User 
            .find()
            .then(users => {
                res.status(200).json({users: user.map(user = user.serialize())}
                );
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ error: 'something went terribly wrong' });
            });

    });

    app.get('/users/:id', (req, res) => {
        User
            .findById(req.params.id)
            .then(user => res.status(201).json(user.serialize()))
            .catch(err => {
                console.error(err);
                res.status(501).json({ error: 'something went terribly wrong'});
            });
    });

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
//////////////////  YouTube API  /////////////////////// 
    app.get('/youtube', (req,res)=>{
        var request = require("request");

        var options = { method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        qs: 
        { part: 'snippet',
            maxResults: '5',
            q: 'motivational',
            key: 'AIzaSyAqMXV6X2Athcax8_D9M2ZXdLQT0CMSRE8' }
            };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            res.send(body);
        });
    });
  
    /////////////////// Quotes API ////////////////////
    app.get('/youtube', (req,res)=>{
      var request = require("request");
      var options = { method: 'GET',
        url: 'https://healthruwords.p.mashape.com/v1/quotes/',
        qs: { id: '731', maxR: '1', size: 'medium', t: 'Wisdom' },
        headers: 
        { 'Postman-Token': 'aba0350b-dd9c-423b-b644-128876c2f451',
          'cache-control': 'no-cache',
          'X-Mashape-Key': 'B3QPWgUy9AmshbKVAui5pw8u292dp1Nok1PjsnjaIvJSkW2zdo',
          'Content-Type': 'application/json' },
        body: { email: 'madeupemail', password: 'madeup' },
        json: true };

      request(options, function (error, response, body) {
        if (error) throw new Error(error);

        res.send(body);
    });
  });  



    
    function isLoggedIn(req,res,next){
      if(req.isAuthenticated())
        return next();
  
      res.redirect('/');
    }



};