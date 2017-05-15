const net = require('net');
const crypto = require('crypto');
const pw = 'abc123';

const stream = net.connect(5001, 'localhost');
process.stdin
  .pipe(crypto.createCipher('aes192', pw))
  .pipe(stream)
  .pipe(crypto.createDecipher('aes192', pw))
  .pipe(process.stdout);
