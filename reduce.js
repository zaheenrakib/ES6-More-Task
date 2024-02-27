const people = [
    {name:'Meena', age : 20},
    {name:'Rina', age : 15},
    {name:'Suchorita', age : 22},
]

const age = people.reduce((p,c) => p[0].age + c[2].age,0);

console.log(age);