import { createServer } from "node:http";
const http = require("http");

const server = createServer((req, res) => {
  res.statusCode = 200;

  const jsonResponse = JSON.stringify({ location: "Mars" });

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Content-Length", Buffer.byteLength(jsonResponse));

  res.end(jsonResponse);
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
