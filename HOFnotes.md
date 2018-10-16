## forEach
The forEach method invokes a higher order function for each element of an array.
```
var arr = [1, 2, 3, 4];

arr.forEach(function(element) {
  console.log(element);
});
```
Compare to a **for..of** loop:
```
var arr = [1, 2, 3, 4];

for (var element of arr) {
  console.log(element);
};
```
See the [Array.prototype.forEach method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)  documentation on the Mozilla Developer Network.

## map
The map method invokes a function for each element of an array, but allows each element to be transformed and pushed to a new array. In other words, the map method:

* Creates a new array that's the same size as the original array.
* Applies a function to each element of the original array.
* Pushes the return value of the function into the new array.
```
var arr = [1, 2, 3, 4];

var squares = arr.map(function(element) {
  return element * element;
});

console.log(squares); // [1, 4, 9, 16]
```
Compare this with the equivalent syntax of a **for..of** loop:
```
var arr = [1, 2, 3, 4];

var squares = [];

for (var element of arr) {
  squares.push(element * element);
}

console.log(squares); // [1, 4, 9, 16]
``` 
See the [Array.prototype.map method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)  documentation on the Mozilla Developer Network.

## filter
After map, the filter method is probably the second most commonly used higher-order function. The filter method invokes a function for each element of an array, but allows each element to be filtered out of a new array. In other words, the filter method:

* Creates a new array that's no larger than the original array.
* Applies a function to each element of the original array.
* Pushes the element into the new array if the function returns true.
The function passed to the **filter** method is called a predicate, because it's value will be true or false.
```
var arr = [1, 2, 3, 4];

var odds = arr.filter(function(element) {
  return element % 2 !== 0;
});

console.log(odds); // [1, 3]
```
Compare this with the equivalent syntax of a **for..of** loop:
```
var arr = [1, 2, 3, 4];

var odds = [];

for (var element of arr) {
  if (num % 2 !== 0) {
    odds.push(element);
  }
}

console.log(odds); // [1, 3]
```
See the [Array.prototype.filter method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)  documentation on the Mozilla Developer Network.

## reduce
The reduce method has a lot to offer and can be thought of as a swiss army knife. The use of reduce is best described through a couple examples of similar problems. Let's look at two problems, summing all of the numbers in an array and multiplying all the numbers in an array.
```
var arr = [1, 2, 3, 4];

var result = 0;

for (var num of arr) {
  result = result + num;
}

console.log(result); // 10
```
```
var arr = [1, 2, 3, 4];

var result = 1;

for (var num of arr) {
  result = result * num;
}

console.log(result); // 24
```
* The initial value of result is 0 for addition and 1 for multiplication.
* The operation is + for addition and * for multiplication.
We can abstract this common task with the **reduce** method! The **reduce** method takes these differences as arguments that you can specify. Although you cannot pass an operator like + or *, you can pass in a function that takes in two values and produces the sum or product.
```
var arr = [1, 2, 3, 4];

var sum = arr.reduce(function(result, element) {
  return result + element;
}, 0);

var product = arr.reduce(function(result, element) {
  return result * element;
}, 1);

console.log(sum);     // 10
console.log(product); // 24
```
⚠️ Notice the order of the parameters in the function passed into reduce. The running total is passed into the result parameter, and each element in the array is passed into the element parameter.

See the [Array.prototype.reduce method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)  documentation on the Mozilla Developer Network.

