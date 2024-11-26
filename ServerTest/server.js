const http = require("http");
const server = http.createServer((request, response) => {
  response.statusCode = 200;

  response.setHeader(" Content-Type: text/html");

  response.end("<body><h1>This is my Node.js server!</h1></body>");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
