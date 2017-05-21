const collect = require('collect-stream');
const split = require('split2');

const sp = process.stdin.pipe(split(JSON.parse));
collect(sp, function(err, rows) {
  if (err) console.error(err);
  else console.log(rows);
});
