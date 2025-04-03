function findIndexOf(str,target) {
    console.log("Original: " + str);
    console.log("Index: " + str.indexOf(target));
}
findIndexOf("Hello World!", "Hello");


function getSlice(str, start, end) {
    console.log("Original: " + str);
    console.log("Slice: " + str.slice(start, end));
}
getSlice("hello world!", 6, 11);


function sum(a,b){
    return a + b;
}
const finalSum = sum(1,2);
console.log("sum of a,b: " + finalSum)

let ans = "hello".slice(0,2)
console.log(ans)  //slice and substring are same attributes.

const val = "hi,hy,hey,heyyy,helo"
const words = val.split(",");
console.log(words);

const intialArray = [1,2,3,4,5];
intialArray.pop();
intialArray.push(9);
console.log(intialArray);

const initialArray = [1,2,3,4,5];
const secondArray = [6,7,8,9,10];
console.log(intialArray.concat(secondArray));
initialArray.shift();
initialArray.unshift(0);
console.log(initialArray);

function log1(){
    console.log("Hello");
}
function log2(){
    console.log("World");     // call back functions 
    }
function logWhatsPresent(fn){
    fn();
}

logWhatsPresent(log1);
