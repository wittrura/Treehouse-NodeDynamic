let Profile = require("./profile.js");

let studentProfile = new Profile("chalkers");

// when JSON body is fully received the full body is passed in to the handler or callback
studentProfile.on("end", console.dir);

// if an error occurs an error object is passed in to the handler or callback
studentProfile.on("error", console.error);
