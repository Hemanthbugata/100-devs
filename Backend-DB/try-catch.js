function getLength(name){
    return name.length;
}
try{
    const ans = getLength(name);
    console.log(ans);
} catch(err){
    console.log("Error: " + err.message);
}

console.log("End of program");