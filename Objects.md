# Objects
*Why Objects?*
-Allow us to assign certain properties
-Objects can go into arrays
-Creates a dictionary of things
    *A word and a definition
    *anything that has a key value pair
    *Allows us to keep nesting

```
var instructor = {
    name: 'Berto',
    age: 29,
    height: '6ft'
}

var student = {
    age: 70,
    height: '7ft',
    name: 'Dan'
}

console.log(instructo.name)
>'Berto'
console.log(student.name)
>'Dan'
```
Doesn't matter where name is stored, the object has key value pairs that are specific for each value.
More powerful than an array.

## Acess Properties in Objects
-Dot notation
```
instructor.name
```
*Targets the object instructor and the key name*

-Bracket notation
```
console.log(instructor['pets'])

var property = 'age'
console.log(instructor[property])
>29
```
*Re-assigning values*
``` instructor['name'] = 'Javier'
console.log(instructor.name)
>Javier

//or
instructor.name = 'boo'
console.log(instructor['name'])
>boo
```



## Nesting Objects/Arrays
*You can put objects into arrays and vice versa*
```
var instructor = {
    name: 'Berto',
    age: 29,
    height: '6ft'
    pets: [iago, 'spidey']
}
var iago = {
    name: 'iago',
    age: 4,
    color: 'brown'
}

var pets = [iago,'spidey]
//This is putting the object iago into the array pets

console.log(pets)
>[{name: 'iago', age: 4, color: 'brown'}, 'spidy']
```

## Looping through Objects
```
for (var property in instructor){
    console.log(property);
}
>name
age
height
pets

for (var property in instructor){
    console.log('property: ', property)
    console.log('value: ', instructor[property])
}
>property: name
property: age 
property: height
property: pets
value: Berto
value: 29
value: 6ft
value: [{name: 'iago', age: 4, color: 'brown'}, 'spidy']
```



