// function add (num1 , num2 = 10 ){
    // num2 = num2 || 0;
    // if (num2 == undefined){
    //     num2 = 20;
    // }
//     return num1 + num2;
// }
// const total = add(  13);
// console.log(total);

const addIt = num => num * 3;
const addIt2 = (num1, num2) => num1 - num2;
const addIt3 = () => 10;

const total = addIt3();
console.log(total);