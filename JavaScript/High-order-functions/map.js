// let array = [2,2,2,2,2];
// let newArray = array.map((a,i)=> a * (i+1));
// console.log(newArray);
const array = [1,2,3,4,5];
function transform(i){
    return i*2;
}
const newArray = array.map(transform);
console.log(newArray);