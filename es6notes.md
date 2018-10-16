# ES6

### Template Literals
```
let myVariable = 'Template Literal'
`This is an example of a ${myVariable}`
```
* These are used instead of quotes ('', or "")
* You can use both sigle and double quotes inside of a template literal
* variables are denoted by '${}'

### let and const
* let is block level
* let doesn't go down into blocks:
```
let nombre = 'Tyler'
function speak(){
    console.log(`my name is ${nombre}`)
}

speak() // => nombre is not defined
```
* var pollutes everything:
```
function speak(){
    var newName = 'Sue'
    console.log(`my name is ${newName}`)
}
console.log(newName) // => 'Sue' will print out
```

### 'Fat' arrow functions (=>)
*Before fat arrow functions*
```
function add(a,b){
    return a+b
}
```
*With arrow functions*
```
const add = (a,b) => a+b
```
*or*
```
const add = (a,b) => {
    return a+b
}
```
### Default Parameters
* When you want to add a default value for parameters that maybe a user didn't put in 
*Before ES6*
```
function greet(myName, yourName){
    console.log(`Hello ${yourName}, my name is ${myName})
}
greet('blinky) // => 'Hello undefined, my name is blinky
               // we get undefined for the yourName parameter because we only passed one argument
```
*ES6*
```
function greet(myName='Ski',yourName='you didnt say'){
    console.log(`Hello ${yourName}, my name is ${myName})
}
greet() // => 'Hello you didnt say, my name is Ski
```
### Object Shorthand
*Using the spread opperator*
```
const otherStuff = {color: 'blue', muffin: 'blueberry'}

const city = 'Denver'
const state = 'Colorado'
const season = 'Fall'

let obj = {city, state, season}

console.log(obj) // => {city: 'Denver', state: 'Colorado', season: 'Fall'}
let newObj = {...obj, ...otherStuff} // => {city: 'Denver', state: 'Colorado', season: 'Fall', color: 'blue', muffin: 'blueberry'}
```

### Array/Object Destructuring 
*Before ES6; to swap values, we would have to create a temporary variable to hold the value*
```
var a = "Denver"
var b = "London"
var temp = b
b = a
a = temp
console.log(a) // => 'London

```
*With array destructuring*
```
var a = "Denver"
var b = "London"
[a,b] = [b,a]
console.lgo(a) // => 'London'

//example with objects
let obj = {name: 'Chris', color: 'Black', title: 'Grand-Foo-Bar'}
const {name, title} = obj 
console.log(title) // => 'Grand-Foo-Bar'
console.log(name) // => 'Chris'
```