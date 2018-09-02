db-url
==========

[![NPM](https://nodei.co/npm/db-url.png?compact=true)](https://nodei.co/npm/db-url/)

Parse connection string to object for mysql/mysql2

## Usage

```js
const parse = require('db-url').parse;

var config = parse('mysql://root:pw@hostname:3307/dbname?encoding=utf8');
```