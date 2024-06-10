const os = require("os");

// 1) OS settings -> arch, name, platform, temp folder directory path
console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

// 2) Free Memory (RAM)
console.log("Free Memory (in bytes) -> ", os.freemem());      // in bytes
console.log("Free Memory (in GB) -> ", os.freemem()/1024/1024/1024);      // in GB

// 2) Total Memory (RAM)
console.log("Free Memory (in bytes) -> ", os.totalmem());      // in bytes
console.log("Free Memory (in GB) -> ", os.totalmem()/1024/1024/1024);      // in GB