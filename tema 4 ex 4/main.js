// Ex 4.
arr = [1 ,-2, 6, -7, 10, 9, 14, true, false,
     null, undefined];

// 1)
const onlyNumbers = arr.filter(function(number){
    return (typeof(number) === 'number');
});

console.log(onlyNumbers);

// 2)
const ar2 = onlyNumbers.map(item => item * 10);

console.log(ar2);

// 3)
const sum = ar2.reduce(function(accumulator, currentValue) {
   return accumulator + currentValue;
});

console.log(sum);
