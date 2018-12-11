# Data Structuring with Classes and Linked List in JavaScript

## Classes

#### What is a class?
* Almost like a blueprint
* Like a base (migration)
* Can be named and un-named

## Linked Lists
*Lists where the elements can be easily inserted and removed without reallocation/reorginization of the entire structure*
* Linear collection of elements(nodes) refrencing the next node 
    - Connected nodes:
        * Nodes - data points on a larger network
        * Refrence to other nodes through pointers
```
Singular:
________________  __________________  ________________
|[value] [next]|  | [value]  [next]|  |[value] [next]|
|     Head  ----> |       node  ----> |   tail   ------> null  
----------------  ------------------  ----------------
          ^pointer to next value

Circular (end points to start):
________________  __________________  ________________
|[value] [next]|  | [value]  [next]|  |[value] [next]|
|     Head  ----> |       node  ----> |   tail   _______
----------------  ------------------  ----------------  |
  ^_____________________________________________________|

Doubly (each points to the next and previous):
________________  __________________  ________________
|[value] [next]|  | [value]  [next]|  |[value] [next]|
|     Head     <---->     node    <---->   tail   <-----> 
----------------  ------------------  ----------------
                                                    
```
#### Pros 
* dynamic data structure
* Node opperations easy to impliment
* support different data types
* Not bound to contiguous memory allocation
* base for other data structures
#### Cons
* must be read suquentially
* more memory allocation (having to store refrence to next node)
* If we need to store different types of info (strings, integers, floats, ect.)

### Members
* Insert: append a node 
* Remove: remove a node 
* Indexing: retrieve node by index
* Head: refrences the start of the list
* Tail: refrences the end of the list

### Access Time( Big O)
* O(1): Lowest
* O(n)




### Linked List Resources

* [Slides - Linked Lists](https://docs.google.com/presentation/d/1VmmQp-07Ed7i5iK8ZvDNB_4coZyEw1Pr0XrwFCtj128/edit#slide=id.g11adedd999_0_1)
* [Learn - Linked Lists](https://learn-2.galvanize.com/cohorts/757/blocks/61/content_files/Linked%20Lists/01-Linked%20List%20Intro.md)
* [Learn - Singly Linked Lists](https://learn-2.galvanize.com/cohorts/757/blocks/61/content_files/Linked%20Lists/02-SinglyLinkedList.md)
* [Learn - Doubly Linked Lists](https://learn-2.galvanize.com/cohorts/757/blocks/61/content_files/Linked%20Lists/03-DoublyLinkedList.md)
* [Video - Arrays vs Linked Lists](https://www.youtube.com/watch?v=lC-yYCOnN8Q)
* [Arrays vs Linked Lists Cheatesheet](https://github.com/gSchool/describe-arrays-linked-lists/blob/master/drills/version-1/rubric.md)