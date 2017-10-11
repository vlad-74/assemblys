"use strict";

document.getElementById('loginButton').onclick = function() {

  // ======== Способ 1 (require.ensure) ==
  require.ensure([], function(require) {
    var login = require('./login');

    login();
  }, 'auth');

};

document.getElementById('logoutButton').onclick = function() {

  // ======== Способ 1 (require.ensure) ==
  require.ensure([], function(require) {
    var logout = require('./logout');

    logout();
  }, 'auth');

};
