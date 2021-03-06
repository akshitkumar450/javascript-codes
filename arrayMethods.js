/////////////////////////////////////////////////
// arrays are object and they get access to built in methods

// let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// it does not change the array
// slice method return new array
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2)); //last 2
// console.log(arr.slice(-1)); //last 1
// console.log(arr.slice(1, -2));
// console.log(arr.slice()); //shallow copy
// console.log([...arr]); //shallow copy

// SPLICE (removing elements from array)
// it changes the given array
// console.log(arr.splice(2));
// first is index and second is no of elements to be deleted
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// REVERSE (changes the array)
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT (does not change the array)
// const letters = arr.concat(arr2);
// console.log(arr);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN (join the elements of array by a separator)
// console.log(letters.join(' * '));

///////////////////////////////////////////
// The new at Method
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// // getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]); //returns a new array and then we get the value of that index
// console.log(arr.at(-1));

// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

///////////////////////////////////////
// Looping Arrays: forEach
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.entires()
// for (const mov of movements.entries()) {
//     console.log(mov)
// }
Array[0, 200]
Array[1, 450]
Array[2, -400]
Array[3, 3000]
Array[4, -650]
Array[5, -130]
Array[6, 70]
Array[7, 1300]

// for (const movement of movements) {
// destructuring from movements.entires()
// for (const [i, movement] of movements.entries()) {
//     if (movement > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${movement}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//     }
// }

// console.log('---- FOREACH ----');
// movements.forEach(function (mov, i, arr) {
//     if (mov > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${mov}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//     }
// });
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...


///////////////////////////////////////
// The map Method
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map(
//     (mov, i) =>
//         `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//             mov
//         )}`
// );
// console.log(movementsDescriptions);


///////////////////////////////////////
// The filter Method
// const deposits = movements.filter(function (mov, i, arr) {
//     return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);


///////////////////////////////////////
// The reduce Method
// console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);


// Maximum value
// const max = movements.reduce((acc, mov) => {
//     if (acc > mov) return acc;
//     else return mov;
// }, movements[0]);
// console.log(max);

///////////////////////////////////////
// The Magic of Chaining Methods
// const eurToUsd = 1.1;
// console.log(movements);

// PIPELINE
// const totalDepositsUSD = movements
//     .filter(mov => mov > 0)
//     .map((mov, i, arr) => {
// console.log(arr);
//         return mov * eurToUsd;
//     })
// .map(mov => mov * eurToUsd)
//     .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

//////////////////////////////////////
// The find Method
// returns first the value satisfying condtn

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

///////////////////////////////////////
// some and every
// console.log(movements);

// EQUALITY
// console.log(movements.includes(-130));

// SOME: CONDITION
// console.log(movements.some(mov => mov === -130));

// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

// EVERY
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// Separate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));


///////////////////////////////////////
// flat and flatMap
// flat will go only one level deep by default
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// to go 2 levels deep
// console.log(arrDeep.flat(2));

// flat
// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// flatMap
// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

///////////////////////////////////////
// Sorting Arrays

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); //only works with strings
console.log(owners); //mutates the original array

// console.log(movements);
// console.log(movements.sort()); //doest not work


// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

// movements.sort((a, b) => a - b);
// console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

// movements.sort((a, b) => b - a);
// console.log(movements);


// More Ways of Creating and Filling Arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Emprty arrays + fill method
// const x = new Array(7); //empty array
// console.log(x);
// console.log(x.map(() => 5));

// fill method mutates the array

// x.fill(1, 3, 5); //(value,start,end)
// x.fill(1);
// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

// Array.from
//  (returns a new Array)
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (cur, i) => i + 1);
// console.log(z);
//                     (or)
// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);