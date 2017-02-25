let Profile = require("./profile.js");
let renderer = require("./renderer.js");

//  Handle HTTP route GET / and POST / aka index
function home(req, res){

  // if url == '/' && GET
  if(req.url === '/'){
    // show search
    res.writeHead(200, {'Content-Type': 'text/plain'});
    renderer.view("header", {}, res);
    renderer.view("search", {}, res);
    renderer.view("footer", {}, res);
    res.end();
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
    renderer.view("header", {}, res)

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
      renderer.view("profile", values, res);
      renderer.view("footer", {}, res);
      res.end();
    });

    // on "error"
    studentProfile.on("error", function(e){
      // show error
      renderer.view("error", {errorMessage: e.message}, res);
      renderer.view("search", {}, res);
      renderer.view("footer", {}, res);
      res.end();
    });

  }
}

module.exports.home = home;
module.exports.user = user;
