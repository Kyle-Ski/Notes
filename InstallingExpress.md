### Step 1
```
>npm init -y
```
* In the ```package.json```, ```"main": "index.js"``` will tell your server where to begin, without the '-y' you will not actually make the file
*DON'T TOUCH ```package-lock.json```*
### Step 2
``` 
>npm install express
```
* check your ```package.json``` to check if express was installed
### Step 3
```
>git init
>touch .gitignore && code .gitignore
```
* add "the last ```.gitignore``` you will ever need"
### Step 4 
* Create GitHub Repo
* add and commit initial commit 
* push
### Step 5 
* In ```package.json``` add the ```"start": "node index.js"```
* This starts up the file when you ```npm start```
### Step 6 
* In ```index.js```:
```
const express = require('express')
```
* ^^This looks in your ```package.json``` and grabs the express module, now:
```
const express = require('express')
const app = express()
```
* ^^Now we are calling the function and any time we use 'app' we are calling the experss framework
### Step 7
*Set a port*
```
const port = 3000
app.listen(port, () => console.log(`I got you on ${port}`))
```
* annnnnd:
```
>npm start
```
* now if we add:
```
app.get('/', (req, res, next) => {
    res.send('rawr')
})
```
When we make a get request to the port we will get the 'rawr' back on the screen

### Adding CORS to server
```
>npm install cors
```
* in ```index.js```:
```
app.use(cors())
```