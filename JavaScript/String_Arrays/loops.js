function findSum(n){
let ans = 0;
for(let i=1;i<n;i++){
    ans = ans + i;
    }
console.log(ans);
}
console.log(findSum(10));
console.log(findSum(1000));