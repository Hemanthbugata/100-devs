const array = [1,2,2,3,4,4,5,6];
function filterOut(n){
        if(n%2 == 0){
            return true;
        }else{
            return false;
        }
    }
const newArray = array.filter(filterOut);

console.log(newArray);