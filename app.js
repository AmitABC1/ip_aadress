const http = require('http');

const server = http.createServer((req, res) => {
  const clientIp = req.socket.remoteAddress;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Your IP address is: ${clientIp}`);
});

const PORT = 80;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
