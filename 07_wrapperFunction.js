
/* 
Basically what we were doing previously is using all these exports, modules, require things but behind the scene node was wrapping all these
things inside the wrapper function to make them private which we created right for visual understanding. (IIFE function)
Immediately Invoked Function Expression
*/


// IIFE function (anonymous function, you can give name to IIFE function but you can never call them after this immediate invoke)
(function (exports, require, module, __filename, __dirname) {

    // const fs = require("fs");

    const name = "Ritik";
    console.log(name);

    // module.exports = {name};

})();