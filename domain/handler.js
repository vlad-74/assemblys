var fs = require('fs');

module.exports = function handler(req, res) {
  if (req.url == '/') {

    fs.readFile('no-such-file', function(err, content) {//'no-such-file'  'index.html'

      if (err) throw err; // JSON.parse("invalid!")

      res.end(content);
    });

  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }

};
