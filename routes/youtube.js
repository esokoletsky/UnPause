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

  console.log(body);
});

module.exports = { options }