const arr = [1,2,3,4,5];
let reverse = arr.reverse();
console.log(arr);

const currentDate = new Date();
console.log(currentDate.getMonth()+1);
console.log(currentDate.getFullYear());

function currentTimePrint(){
    console.log(new Date().getTime());
}
setInterval(currentTimePrint, 1000);