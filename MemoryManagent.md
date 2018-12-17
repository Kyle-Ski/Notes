# Memory Managment
### Register
* Quickly accessible location available to a CPU
* Directly (physically) on the CPU
* Limited storage (64 bits)
* in JavaScript an integer is 64 bits so:
```
let x = [1,2,3,4,5]
```
this^^ is 320 bits
* So we use Pointers (usually hexidecimal numbers) to point to a spot in memory

### Memory Groups
*Computers use two different groups for memory*

#### The Heap
* General Data storage
* ALL Objects are stored on the heap
* There is no storage pattern enforcement
* *Garbage Collection* 
    - a separate program that periodiacally searches for objects that no longer have any pointers pointing to them
    - if there is a memory leak (a loop going and making new variables), the app might freeze to expand its memory needs
    - it might also freeze to go deeper to check if an object doesn't have a pointer
        * This is heavy b/c it needs to create a whole different space in memory to copy to




### Pointers
* Ways to correlate data that is in the stack
### Refrence Type
* 