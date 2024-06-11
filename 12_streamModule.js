/*

Node.js Streams -> Streams are objects that let you read data from a source or write data to a
destination in continuous fashion. In Node.js there are four types of streams -
- Streaming means listening to music or watching video in 'real time', instead of downloading
a file to your computer and watching it later.
1) Readable : Stream which is used for read operation
2) Writable : Stream which is used for write operation
3) Duplex : Stream which can be used for both read and write operation
4) Transform : A type of duplex stream where the output is computed based on input

*/

const fs = require("fs")
const http = require("http")

const server = http.createServer();

server.on("request", (req, res) => {

    // 1st method which is not streaming method and we are loading all the data at once from the input.txt
    // fs.readFile("12_input.txt", (err, data) => {
    //     if(err) return console.log(err);
    //     res.end(data.toString());
    // })


    // 2nd method which is streaming method and we will be loading data in chunks
    // const rStream = fs.createReadStream("./12_input.txt");

    // rStream.on('data', (chunkData) => {
    //     res.write(chunkData);
    // })

    // rStream.on('end', () => {
    //     res.end();
    // })

    // rStream.on('error', () => {
    //     res.writeHead(404, {"content-type" : "text/html"});
    //     res.end("Error : 404\nPage does not exist!")
    // })


    // 3rd method using stream.pipe()
    const rStream = fs.createReadStream("./12_input.txt");
    rStream.pipe(res);
    
})

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to the server!");
})