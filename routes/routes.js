const User = require('../models/user');
const Goal = require('../models/goal');


module.exports = function(app, passport) {
/////////// Get Endpoints ///////////////////

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
    app.get('/youtube/:search', (req,res)=>{
        var request = require("request");

        let videos = {
          'motivational':[
            'ibUR41DRz2I','Q8lCFHUecTE','0v8ARinQSnM','0-41QTntHqI','R3nxw3bg7XU',
            'H-aAXuZpp9c', 'fSmySmxYMyw', 'k9qPlbhpAPU', 'ZGU4lLJwFKo', 'NDcvREId6KQ'
          ],
          'meditation':[
            'taxs_vhlxgs', 'CcqZ47d398k', '_0oxd7Llcec', 'xgdFdTNMr5c', 'bRch_4IeuXQ',
            'BO2KCCVcHQQ', '3RxXiFgkxGc', 'TP81B_hpcfI', 'grRVHgwkyNk', 'Y1zN6eJLudY'
          ]
        }

        res.send({'video':videos[req.params.search][Math.floor(Math.random()*videos[req.params.search].length)]})

        /*var options = { method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        qs: 
        { part: 'snippet',
            maxResults: '1',
            q: req.params.search,
            key: 'AIzaSyAqMXV6X2Athcax8_D9M2ZXdLQT0CMSRE8' }
            };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            res.send(body);
        });*/
    });
  


    /////////////////// Quotes API ////////////////////
    app.get('/quotes', (req,res)=>{
      var request = require("request");
      var options = { method: 'GET',
        url: 'https://healthruwords.p.mashape.com/v1/quotes/',
        qs: { maxR: '1', size: 'medium', t: 'Motivational' },
        headers: 
        { 'Postman-Token': 'aba0350b-dd9c-423b-b644-128876c2f451',
          'cache-control': 'no-cache',
          'X-Mashape-Key': 'B3QPWgUy9AmshbKVAui5pw8u292dp1Nok1PjsnjaIvJSkW2zdo',
          'Content-Type': 'application/json' },
        body: { email: 'madeupemail', password: 'madeup' },
        json: true };

      request(options, function (error, response, body) {
        if (error) throw new Error(error);
       //let random = Math.floor(Math.random()*100);
        res.send(body);
    });
  });  

////////////////////// Goals Endpoint   //////////////////////

app.get('/goals', (req, res) => {
  Goal
    .find()
    .then(goals => {
      res.json({goals: goals.map(goal => goal.serialize())}
      );
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'something went terribly wrong' });
    });
});

app.get('/user-goals/:userID', (req, res) => {
  Goal
    .find({user: req.params.userID})
    .then(goals => {
      res.send(goals);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'something went terribly wrong' });
    });
});

app.delete('/goals',(req,res)=>{
  Goal.findOneAndDelete({_id:req.body.id})
    .then(goal=>{
      res.send({message:'OK'});
    });
})

app.post('/goals', (req, res) => {
  const requiredFields = ['minutes', 'hours', 'day', 'overall' ];
  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`;
      console.error(message);
      return res.status(400).send(message);
    }
  }
  
  Goal.create(req.body)
    .then(goal=>{
      res.status(200).json(goal);
    })
    .catch(err=>res.send(err));
  
  

});


};