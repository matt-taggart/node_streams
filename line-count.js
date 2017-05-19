const split = require('split2');
const through = require('through2');
var lineCount = 0;

process.stdin
  .pipe(split())
  .pipe(through(write, end));


function write (buf, enc, next) {
  lineCount++;
  next();
}

function end (next) {
  console.log(lineCount);
  next();
}
