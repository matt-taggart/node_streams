const fs = require('fs');
const w = fs.createWriteStream('cool.txt');
w.on('finish', function () {
  console.log('FINISHED');
});
w.write('hi\n');
w.write('wow\n');
w.end();
