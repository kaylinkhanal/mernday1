let arr = ['arjun', 5, 9, 12];
let arrayToObject = { ...(arr) }     // using the spread operator (...)
console.log(arrayToObject)     // { '0': 'arjun', '1': 5, '2': 9, '3': 12 }