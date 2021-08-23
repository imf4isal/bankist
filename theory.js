'use strict';

// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// arrays are objects. we can use method into array.
// const arr = ['a', 'b', 'c', 'd', 'e'];

//slice ;doesnt muted the original array
// console.log(arr.slice(1, 2));
// console.log(arr.slice(2, 5));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -1));

//splice ; muted the original array
// const arr2 = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr2.splice(1));
// console.log(arr2.splice(0));
// console.log(arr2);

//reverse
// const arr3 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr3.reverse());
// console.log(arr3);

//concat

// console.log(arr.concat(arr3));
// console.log([...arr, ...arr3]);

//join

// console.log(arr.join('.'));
// push, pull, shift, unshift, common megthod
//coding challenge 1
// const checkDog = function (dogsJulia, dogsKate) {
//   const aDogJulia = dogsJulia.slice(1, -1);

//   const dogsBoth = aDogJulia.concat(dogsKate);

//   dogsBoth.forEach(function (dog, i) {
//     if (dog > 3) {
//       console.log(`Dog number ${i} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i} is stil a puppy`);
//     }
//   });
// };

// const jul = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];

// checkDog(jul, kate);

//map*******************************************************************************

const usdToEu = 1.1;

// const usdToEuro = movements.map(function (move) {
//   return move * usdToEu;
// });

const usdToEuro = movements.map(move => move * usdToEu);

console.log(movements);
console.log(usdToEuro);

const max = movements.reduce((acc, curr) => {
  if (acc > curr) return acc;
  else return curr;
});

console.log(max);

// const calcAverageHumanAge = function (ages) {
//   const convertToHumanAge = ages.map(age => {
//     if (age <= 2) return 2 * age;
//     else return 16 + age * 4;
//   });

//   const filterDog = convertToHumanAge.filter(age => age >= 18);

//   const averageAge = filterDog.reduce((acc, curr) => acc + curr, 0);

//   const averAgee = averageAge / filterDog.length;
//   console.log(convertToHumanAge);
//   console.log(filterDog);
//   console.log(averageAge);
//   console.log(averAgee);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

const calcAverageHumanAge = ages => {
  const convertToHumanAge = ages
    .map(age => {
      if (age <= 2) return 2 * age;
      else return 16 + age * 4;
    })
    .filter(age => age >= 18)
    .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);

  console.log(convertToHumanAge);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
