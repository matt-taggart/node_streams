const fs = require('fs');
const through = require('through2');

process.stdin
  .pipe(through(write))
  .pipe(process.stdout);


function write(buf, enc, next) {
  next(null, buf.toString().toUpperCase());
}
