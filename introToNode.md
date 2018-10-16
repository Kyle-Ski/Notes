# Intro to Node Warm Up

## Description

For this warm up you will familiarize yourself with the node eco system. Working in groups you will research and write summaries of the terms provided.

### Node.JS

What is node?
* Node is a JavaScript runtime enviorment, that is used outside of the browser.  We often use it to build back-end services (APIs).
Where did it come from?
* Created in 2009
* Node team took out V8 engine from the chrome browser
Why do we use it?
* Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.
What does REPL stand for?
* Read-Evaluate-Print-Loop
Are all of the most current JS features available to us in node.JS?
* yes
### Express

What is Express?
* Express is a fast, unpointed, minimalist web node.js framework
Why do we use it?
* Express 3.x is a light-weight web application framework to help organize your web application into an MVC architecture on the server side. You can use a variety of choices for your templating language (like EJS, Jade, and Dust.js).
How do we use it?
* You can then use a database like MongoDB with Mongoose (for modeling) to provide a backend for your Node.js application. Express.js basically helps you manage everything, from routes, to handling requests and views.
### Npm

What does 'npm' stand for?
* "Node Package Manager"
Why do we use it?
* We use it to manage Node.js libraries
How do we use it?
* Through the command line
* ```npm init -y```
What is a package.json?
* It is a file that contains the metadata for the project. It also handles the dependencies
How do we create one?
1. Create a NPM account 
2. In your terminal type ```npm adduser``` and sign in using your credentials
3. Make a package with ```md [package name]```
4. Create a package.json file ```cd [package name] && touch package.json```
5. In the package.json name the package like ```    {
    "name": @[username]/[package name]
}``` 
This creates the package under the scope of your username (callled a scoped package)
6. Add a version to your package
```{
    "name": @[username]/[package name],
    "version": "1.0.0"
}
```

Given a version number MAJOR.MINOR.PATCH, increment the
* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.
7. Publish your package with ```npm publish --access=public``` This publishes to the public and not just privatily
8. Add a [license](https://docs.npmjs.com/files/package.json#license) and add it to your package.json
9. Add a main file and add your code, also add the main to your package.json
10. Create and add it to a GitHub repo, also add the "repository" to your package.json
11. Your package.json should look a little like: 
```{
    "name": "@[username]/[package name]",
    "version": "1.0.0",
    "description": "[Description]",
    "license": "MIT",
    "repository": "[username]/[package name]",
    "main": "index.js",
    "keywords": [
        "[package name]",
        "npm",
        "package",
        "[username]"
        ]
    }
What are node modules?
    * Module in Node.js is a simple or complex functionality organized in single or multiple JavaScript files which can be reused throughout the Node.js application. Each module in Node.js has its own context, so it cannot interfere with other modules or pollute global scope.
What is the difference between -g and -save?
    * ```-g``` installs a package globaly, ```-save``` targets where you want to save to 
What is a .gitignore file?
    *  .gitignore tells git which files (or patterns) it should ignore. It's usually used to avoid committing transient files from your working directory that aren't useful to other collaborators, such as compilation products, temporary files IDEs create, etc.
Why should I put `node_modules/` in my git ignore?
    * You don’t want to version control someone else’s code in your code