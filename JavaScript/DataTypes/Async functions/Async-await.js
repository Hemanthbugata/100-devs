function myAsyncFunction(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("hy there")
    }, 4000)
});
return p;
}

async function main(){
    let value = await myAsyncFunction() // returns the resolved value after a callback.
    console.log(value);
}
main();