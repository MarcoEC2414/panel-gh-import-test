const http = require("http");
const port = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end("<h1>Hola desde import por link de GitHub</h1>");
}).listen(port, () => console.log("puerto " + port));