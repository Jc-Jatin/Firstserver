const http = require('http');

const server = http.createServer((req, res) => {
  console.log('My name is Jatin'); 
  
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello, ${req.url.slice(1)}Jatin`); 
});

server.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
