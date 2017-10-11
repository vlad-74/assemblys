"use strict";

var moduleName = location.pathname.slice(1);

var handler;
try {
  var context = require.context('bundle!./routes/', true, /^\.\//);
  handler = context('./' + moduleName);
} catch (e) {
  alert("No such path");
}

if (handler) {
  handler(function(route) {

    route();

  });
}

