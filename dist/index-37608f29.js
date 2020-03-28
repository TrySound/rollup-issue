'use strict';

const log = value => console.log(value);

log(0);
(async () => {
  await new Promise(function (resolve) { resolve(require('./dynamic-8a9dfc94.js')); });
})();

exports.log = log;
