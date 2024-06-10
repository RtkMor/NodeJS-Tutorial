const fs = require("fs");

/* Challenge 

1) Create a folder and name it Thapa
2) Create a file in it named bio.txt and put some data into it
3) Add more data into the file at the end of the existing file bio.txt
4) Read the data without getting the buffer data at first
5) Rename the file name to myBio.txt
6) Now delete both the file and the folder

*/

/*

// 1) Creating Folder
fs.mkdirSync("Thapa");

// 2) Creating file bio.txt
fs.writeFileSync("./Thapa/bio.txt", "This is my bio data");

// 3) Adding / Appending more data into it
fs.appendFileSync("./Thapa/bio.txt", "\nI am appending this new bio");

// 4) Reading the data
// const data = fs.readFileSync("./Thapa/bio.txt").toString();
const data = fs.readFileSync("./Thapa/bio.txt", "utf-8");
console.log(data);

// 5) Renaming the file
fs.renameSync("./Thapa/bio.txt", "./Thapa/myBio.txt");

// 6) Deleting the file and folder
fs.unlinkSync("./Thapa/myBio.txt");
fs.rmdirSync("./Thapa");

*/



// If you are using Async method then you need to pass a callback function as well, (error, data) => {console.log(data)};


// 1) Creating Folder
fs.mkdir("Thapa", (err) => {
    console.log("Folder Created!");
    if(err) console.log(err);
});

// 2) Creating file bio.txt
fs.writeFile("./Thapa/bio.txt", "This is my bio data", (err) => {
    console.log("File Created!");
    if(err) console.log(err);
});

// 3) Adding / Appending more data into it
fs.appendFile("./Thapa/bio.txt", "\nI am appending this new bio", (err) => {
    console.log("Text Appended!");
    if(err) console.log(err);
});

// 4) Reading the data
fs.readFile("./Thapa/bio.txt", "utf-8", (err, data) => {
    if(err) console.log(err);
    else console.log(data);
});

// 5) Renaming the file
fs.rename("./Thapa/bio.txt", "./Thapa/myBio.txt", (err) => {
    console.log("File Renamed!");
    if(err) console.log(err);
});

// 6) Deleting the file and folder
fs.unlink("./Thapa/myBio.txt", (err) => {
    console.log("File Deleted!");
    if(err) console.log(err);
});
fs.rmdir("./Thapa", (err) => {
    console.log("Folder Deleted!");
    if(err) console.log(err);
});