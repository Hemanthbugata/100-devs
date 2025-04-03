var a = new Promise(function(resolve){
    setTimeout(function(){
        resolve("foo");
    }, 1000);
});

function callback(){
    console.log(a);
}

console.log(a);
a.then(callback);

// promise can be used outside a function. 

let p =new  Promise(function(resolve){
    resolve("hy theree");  // place for the writer of async function to do their magic and call resolve at the end with the data.
    });
    p.then(function(){
        console.log(p);
    })