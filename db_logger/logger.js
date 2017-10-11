// var log = require('logger')(module);
// log(db.getPhrase("Run successful"));

module.exports = function(module) {

  return function(/* ... */) {
    var args = [module.filename].concat([].slice.call(arguments));
    console.log.apply(console, args);
  };
};