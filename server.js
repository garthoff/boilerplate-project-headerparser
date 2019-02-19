// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


// your first API endpoint... 
app.get("/api/whoami", function (req, res) {
    let user = {
    agent: req.header('user-agent'), // User Agent we get from headers
    referrer: req.header('referrer'), //  Likewise for referrer
    ip: req.header('x-forwarded-for') || req.connection.remoteAddress, // Get IP - allow for proxy
    lang: req.headers["accept-language"]

    }
  
  res.json({"ipaddress":user.ip,"language": user.lang,
"software":user.agent});
});




// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
