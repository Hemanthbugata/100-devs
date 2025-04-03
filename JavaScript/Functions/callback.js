function log1(){
    console.log("Hello");
}
function log2(){
    console.log("World");     // call back functions 
    }

function log3(){
    console.log("!");
}
function logWhatsPresent(fn){
    fn();
}

logWhatsPresent(log3);
