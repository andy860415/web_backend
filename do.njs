#!usr/local/bin/node

/* parse query to object */
var quertstring = require('quertstring');
var param = querystring.parse(process.env.QUERY.env.QUERY_STRING);

/* return header to bromser */
console.log("Content-type: text/html; charset='utf-8'\n")

/* return normal HTML content */
console.log('<h1>Hello World!</h1>');
