const arr = [1, 2, 3, 34, 5];
let sum = 0;
arr.map((item) => (sum = item + sum));
console.log(sum);
