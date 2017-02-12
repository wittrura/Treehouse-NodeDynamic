let Profile = require("./profile.js");

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
  let username = req.url.replace('/', '');
  if (username.length > 0){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Header\n');

    // get JSON from Treehouse
    let studentProfile = new Profile(username);

    // on "end"
    studentProfile.on("end", function(profileJSON){
      // show profile

      // store necessary values
      let values = {
        avatarUrl: profileJSON.gravatar_url,
        userName: profileJSON.profile_name,
        badgeCount: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      };
      // simple response
      res.write(values.userName + ' has ' + values.badgeCount + ' badges\n');
      res.end('Footer\n');
    });

    // on "error"
    studentProfile.on("error", function(e){
      // show error
      res.write(e.message + '\n');
      res.end('Footer\n');
    });

  }
}

module.exports.home = home;
module.exports.user = user;
