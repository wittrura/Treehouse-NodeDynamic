// Problem: We need a simple way to look at a user's badge count and JavaScript points from a web browser
// Solution: Use Node.js to perform the profile lookups and serve our templates via HTTP

// 1. Create a web server
let http = require('http');
http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

// 2. Handle HTTP route GET / and POST / aka index
  // if url == '/' && GET
    // show search
  // if url == '/'&& POST
    // redirectTo /:username

// 3. Handle HTTP route GET /:username
  // if url == '/*'
    // get JSON from Treehouse
      // on "end"
        // show profile
      // on "error"
        // show error

// 4. Function that handles the reading of files and merge in value
  // read from file and get a string
    // merge values to string
