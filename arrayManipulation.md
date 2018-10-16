# Arrays
## .push() .pop()
These methods deal with the ending of arrays
### .push()
this will append a value to the end of an array
```
var arr = ['pony', 'dog']
arr.push('lizard')

arr 
['pony', 'dog', 'lizard']
```

### .pop()
This method takes the last object in an array and returns it
```
var arr = ['pony', 'dog']
arr.pop()
'dog'
arr 
['pony']
```
## .shift() unshift()
These methods deal with the begining of arrays
### .shift()
This acts like .pop() but it will remove and return the first value in an array
```
> var arr = ['dog', 'puppy', 'lizzard']
undefined
> arr
[ 'dog', 'puppy', 'lizzard' ]
> arr.shift()
'dog'
> arr
[ 'puppy', 'lizzard' ]
> 
```
### .unshift()
This method prepends a value to the begining of an array
```
> var arr = ['dog', 'puppy', 'lizzard']
undefined
> arr
[ 'dog', 'puppy', 'lizzard' ]
> arr.unshift('dragon')
4
> arr
[ 'dragon', 'dog', 'puppy', 'lizzard' ]
> 
```
## .slice() .splice()
These methods are similar but splice will take a value out of an array and change the origial array

### .slice()
slice reads the array and returns the desired values without changing the origional array
This accepts a few arguments.
    1. you can put one index value in and get that value from the array to the end of the array
    2. you can enter 2 index values and .slice() will read the 1st value up to the second 

*.slice() is a pure function. Ex: it does not change the origional array*

```
[ 'dragon', 'dog', 'puppy', 'lizzard' ]
> arr.slice(2)
[ 'puppy', 'lizzard' ]
> arr
[ 'dragon', 'dog', 'puppy', 'lizzard' ]
> arr.slice(0)
[ 'dragon', 'dog', 'puppy', 'lizzard' ]
> arr.slice(3)
[ 'lizzard' ]
> arr.slice(1,3)
[ 'dog', 'puppy' ]
```
### .splice()
This will return and take out values from an array
The index values that you input to the method will act differently than .slice()
The first value you enter will be where it starts and the second will also be cut out of the arrat
```
> arr.slice(1,3)
[ 'dog', 'puppy' ]
> arr.slice(1,3)
[ 'dog', 'puppy' ]
> arr
[ 'dragon', 'dog', 'puppy', 'lizzard' ]
> arr.splice(1,3)
[ 'dog', 'puppy', 'lizzard' ]
> arr
[ 'dragon' ]
> 
```
## new keyword and .fill()
*These have to do with creating and filling arrays*

### new
This is when you want to create a new array with empty slots
```
> var arry = new Array(4)
undefined
> console.log(arry)
[ <4 empty items> ]
undefined
```

### .fill()
*This will fill the array with whatever argument you pass to the method*
```
> console.log(arry)
[ <4 empty items> ]
undefined
> arry.fill(true)
[ true, true, true, true 
```

## Array.isArray()
*This is a tool we can use to see if something is really an array*

```
> arry.fill(true)
[ true, true, true, true ]
> arr = 'hello'
'hello'
> console.log(Array.isArray(arr)
... )
false
undefined
> console.log(Array.isArray(arry))
true
undefined
```

## .concat()
*Method that concatonates two or more arrays*
```
> arry.push('x')
1
> arry.push('y')
2
> arry.push('z')
3
> arr = ['a', 'b', 'c']
[ 'a', 'b', 'c' ]
> arrnold = ['d', 'e', 'f']
[ 'd', 'e', 'f' ]
> var combined = arr.concat(arry.concat(arrnold))
undefined
> console.log(combined)
[ 'a', 'b', 'c', 'x', 'y', 'z', 'd', 'e', 'f' ]
undefined
```

## .indexOf()
*Finds the index number of a value in an array*
*can also use this to check for something not in an array and add it to the array*
```
> combined.indexOf('b')
1
> combined.indexOf('chicken')
-1
> 
```

## .includes()
*Using this will return a boolean because it is testing to see if the array includes the value*
```
> combined
[ 'a', 'b', 'c', 'x', 'y', 'z', 'd', 'e', 'f' ]
> combined.includes('x')
true
> combined.includes('h')
false
> combined.includes('chickem')
false
```

## .toString()

```
> combined
[ 'a', 'b', 'c', 'x', 'y', 'z', 'd', 'e', 'f' ]
> combined.toString()
'a,b,c,x,y,z,d,e,f'
```

## .join()
*you can join values in an array with whatevet you pass through the method*
```
> combined
[ 'a', 'b', 'c', 'x', 'y', 'z', 'd', 'e', 'f' ]
> combined.join('')
'abcxyzdef
> combined.join('>>>')
'a>>>b>>>c>>>x>>>y>>>z>>>d>>>e>>>f'
```

## .sort()
*Will sort everything in an array, but will take a function as a parameter*
```
> combined
[ 'a', 'b', 'c', 'x', 'y', 'z', 'd', 'e', 'f' ]
> combined.sort()
[ 'a', 'b', 'c', 'd', 'e', 'f', 'x', 'y', 'z' ]
> let numbers = [1,2,3,100,10,2,24]
undefined
> console.log(numbers.sort())
[ 1, 10, 100, 2, 2, 24, 3 ]
```
*taking a finction as a parameter*
```
> console.log(numbers.sort(function(a,b){return a-b}))
[ 1, 2, 2, 3, 10, 24, 100 ]
```