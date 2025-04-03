const fs = require('fs');


// own async function 
function readFile(){
    return  new Promise(function(resolve){
        fs.readFile("a.txt", "utf-8", function(err,data){
            resolve(data);
        });
    })
}

// callback function to call
function onDone(data){
    console.log(data);
}  // onDone is the path where the the data is sent synchrounus without a callback neither resolved. 
readFile().then(onDone);
