const createGunzip = require('zlib').createGunzip;
const createHash = require('crypto').createHash;
process.stdin
  .pipe(createGunzip())
  .pipe(createHash('sha512', { encoding: 'hex' }))
  .pipe(process.stdout);
