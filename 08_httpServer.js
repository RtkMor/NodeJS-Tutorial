// The http.createServer() method includes request and response parameters which is supplied by Node.js

// The request object can be used to get information about the current HTTP request
// e.g., url, request header and data.

// The response object can be used to send a response for a current HTTP request.

// If the response from the HTTP server is supposed to be displayed as HTML,
// you should include an HTTP header with the correct content type

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Hello from the HOME side!");
  } else if (req.url == "/about") {
    res.end("Hello from the ABOUt side!");
  } else if (req.url == "/contact") {
    res.end("Hello from the CONTACT side!");
  } else {
    res.writeHead(404, {"Content-type" : "text/html"});
    res.end("Error : 404\nPage does not exist");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the port number 8000");
});
