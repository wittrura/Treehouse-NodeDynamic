// Problem: We need a simple way to look at a user's badge count and JavaScript points from a web browser
// Solution: Use Node.js to perform the profile lookups and serve our templates via HTTP

let routes = require('./routes.js');

//  Create a web server
let http = require('http');
http.createServer(function(req, res){
  routes.home(req, res);
  routes.user(req, res);
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
