const fs = require('fs');
fs.readFile("a.txt", "utf-8", function(err,data){
    console.log(data)

})
console.log("read a file")

// here the code threads reads the program and first read a file then its goes to readFile function in between prints the next code and last itsm prints the file text.

// this process is called async.
let a = 0;
for(let i=0;i<1000000;i++){
    a = a + 1;
}

console.log("hi there ");