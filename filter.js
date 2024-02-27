const filterArray = [33,79,20,78,90,101,30];
//Use filter Method
// const filter = filterArray.filter(f => f % 10 === 0)
// console.log(filter);

// use find method

const finded = filterArray.find(f => f % 10 == 0);
console.log(finded);

// note Find method return only First matching Elements