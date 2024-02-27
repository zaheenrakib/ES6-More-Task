const oddNumber = [1,3,5,7,9];

// Use for Loop;
// let sum = [];
// for(let i = 0; i < oddNumber.length ; i++){
//     const variable = oddNumber[i] + 1;
//     sum.push(variable);
    
// }
// console.log(sum);

//Use map Filter

const odd = num => num + 1;
// const convertNumber =  oddNumber.map(odd);
const convertNumber =  oddNumber.map(num => num + 1);
console.log(convertNumber);