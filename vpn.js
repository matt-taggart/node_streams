const net = require('net');
const crypto = require('crypto');
const pump = require('pump');
const pw = 'abc123';

net.createServer(function (stream) {
  pump(
    stream,
    crypto.createDecipher('aes192', pw),
    net.connect(5000, 'localhost'),
    crypto.createCipher('aes192', pw),
    stream,
    function (err) {
      console.error(err);
    }
  )
}).listen(5001);
