//Using TDD, (wherein you write tests BEFORE your function), write a function that returns the an array of the first and last element in an array of integers.

// /*function integerLogger(stuff) {
//   var first = stuff[0];
//   var second = stuff[stuff.length - 1];
//   var newArray = [first, second];
//   return newArray;
// }*/

// function integerLogger(stuff) {
 
 
//   return  [stuff[0], stuff[stuff.length - 1]];
// }
// /*function integerLogger(x){
  
//   console.log(x);
//   var newArray = [1, 2];
//   console.log(x);
//   console.log(x(newArray.length -1))
//         return newArray;
        
//     }

// //Test
// /integerLogger([1, 2])[1];
// */
// if (integerLogger([1, 2])[0] === 1 && integerLogger([1, 2])[1] === 2) {
//     console.log('test case 1 passed');
//   } else {
//     console.log('test case 1 failed');
//   }
//   if (integerLogger([1, 2, 3])[0] === 1 && integerLogger([1, 2, 3])[1] === 3) {
//     console.log('test case 2 passed');
//   } else {
//     console.log('test case 2 failed');
//   }
//   /*if (integerLogger(array) === [ 5, 9, 34 ]){
//     console.log('test case 1 passed');
//   } else {
//     console.log('test case 1 failed');
//   }
//   console.log(integerLogger(array));
//   */
  
var fun = function(num1, num2){
  return num1 + num2;
}

var value = fun(1, 2);
var value2 = fun(989, 3343);

var sumAndProduct = function(num1, num2){
  return fun(num1, 4) * num2
}

var barf = sumAndProduct(2, 3);
console.log(barf);


