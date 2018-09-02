'use strict';

const url_ = require('url');
const querystring = require('querystring');

function parse(str) {
  let url = url_.parse(str);
  const [user, password] = url.auth ? url.auth.split(':') : [];
  let result = {
    user: user,
    password: password,
    host: url.hostname,
    port: url.port,
    database: url.pathname.substr(1)
  }
  return Object.assign(result, querystring.parse(url.query));
}

module.exports = parse;
parse.parse = parse;
