function getLength(name){
    return name.length;
}
try{
    const ans = getLength(name);
    console.log(ans);
} catch(err){
    console.log("Error: " + err.message); // if  an expection occurs then it reaches the catch statement or console.
}

console.log("End of program");