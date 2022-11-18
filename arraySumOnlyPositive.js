//array sum with help of a reduce and ignore the negative items
const array = [3, 1, -6, 1, -5]
array.reduce((accumulator, currentValue) => {           // synatax -- reduce((accumulator,currentValue,currentIndex,originalArray)
    if (currentValue > 0) {
        accumulator = accumulator + currentValue;
    }
    return accumulator;     // 5
});