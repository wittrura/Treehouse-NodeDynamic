const fs = require('fs');

function mergeValues(values, content) {
  // cycle over the keys
  for (let key in values) {
    // replace all {{key}} with the value from the values object
    content = content.replace("{{" + key + "}}", values[key]);
  }
  // return the merged content
  return content;
}

function view(templateName, values, res) {
  // read from the template files
  let fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});

  // insert values
  fileContents = mergeValues(values, fileContents);

  // write out contents to the response
  res.write(fileContents);
}

module.exports.view = view;
