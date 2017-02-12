//  Handle HTTP route GET / and POST / aka index
function home(req, res){

  // if url == '/' && GET
  if(req.url === '/'){
    // show search
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Header\n');
    res.write('Search\n');
    res.end('Footer\n');
  }
  // if url == '/'&& POST
    // redirectTo /:username
}

// Handle HTTP route GET /:username
function user(req, res){
  // if url == '/*'
  let username = req.url.replace('/', "");
  if (username.length > 0){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Header\n');
    res.write(username + '\n');
    res.end('Footer\n');
    // get JSON from Treehouse
      // on "end"
        // show profile
      // on "error"
        // show error
  }
}

module.exports.home = home;
module.exports.user = user;
