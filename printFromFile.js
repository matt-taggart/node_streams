const fs = require('fs');
const through = require('through2');

fs.createReadStream(process.argv[2])
  .pipe(through(write))
  .pipe(process.stdout);

function write (buf, enc, next) {
  next(null, buf.toString().toUpperCase());
}
