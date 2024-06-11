const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {

    const data = fs.readFileSync(`${__dirname}/10_userapi.json`, 'utf-8');

    if(req.url == '/'){
        res.end("Hello from the HOME side!");
    }
    else if(req.url == '/about'){
        res.write("Hello from the ABOUT side!");
        res.end();
    }
    else if(req.url == '/contact'){
        res.end("Hello from the CONTACT side!");
    }
    else if(req.url == '/userapi'){
        res.writeHead(200, { "content-type" : "application/json" })
        const objData = JSON.parse(data);
        res.end(JSON.stringify(objData));
    }
    else{
        res.writeHead(404, {"Content-type" : "text/html"});
        res.end("Error : 404\nThis page is not available");
    }
})

server.listen(8000, "localhost", () => {
    console.log("Listening to the port 8000");
})