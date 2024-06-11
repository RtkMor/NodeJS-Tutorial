/*

Challenge :-
1) Convert to JSON
2) Now write that data into a new file
3) Read the file to get the data
4) Convert it back to the original data or object
5) Do the console.log of the data

*/


const fs = require("fs");

const obj = {
    name: "Ritik",
    age: 22,
    job: "Frontend Developer"
}

const jsonObj = JSON.stringify(obj);

// fs.writeFile("./09_file.json", jsonObj, (err) => {
//     if(err) console.log(err);
// })

const getFile = fs.readFile("./09_file.json", "utf-8", (err, data) => {
    if(err) console.log(err);
    else{
        const orginialData = JSON.parse(data);
        console.log(orginialData);
    }
})