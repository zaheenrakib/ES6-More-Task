const instructor = [
    {name: 'Modi', age : 28 , position:'Senior'},
    {name: 'Lodi', age : 29 , position:'Junior'},
    {name: 'Nodi', age :30 , position:'Senior'},
]

// Use filter Method
const filter = instructor.filter(f => f.position === 'Senior');
console.log(filter[0].name);
console.log(filter[1].name);
