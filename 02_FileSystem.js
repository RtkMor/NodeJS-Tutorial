// get the file system package
const fs = require("fs");


/* Please run these pirces of code one at a time by commenting and uncommenting them to get better understanding */


// 1) Update an existing file or Create new file with the data (message)
// fs.writeFileSync('02_read.txt', 'Hello I am creating this file using the file system package which is given to us by node');


// 2) Append data (message) in the existing file
// fs.appendFileSync('02_read.txt', '\nNow I am appending this line using the file system');


// 3) Read file data (message)
const buf_data = fs.readFileSync('02_read.txt');
console.log(buf_data);
// this is a new data type which we call buffer and it store data in binary format


// 4) Converting the buff_data into string format
const org_data = buf_data.toString();
console.log(org_data);


// 5) Rename the file
fs.renameSync('02_read.txt', '02_read_write.txt');
