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

    
  
// routes ======================================================================
require('./routes/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport


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