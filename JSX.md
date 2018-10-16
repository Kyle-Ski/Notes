# JSX
* Created by Facebook
* Instead of re-rendering entire page, it uses classes as blueprints to only change the thing that needs tp be changed

React uses DOM names instead of HTML attribute names:
* **className** instead of **class**
```
const element = <p className="bold">Tokyo Dog</p>;
```
JavaScript expressions are used in React with **{}**
```
const PiSquared = () => (
  <span>{Math.pow(Math.PI, 2)}</span>
)
```
*When declaring a function, and then creating a HTML tag in that function you need to use {} again for JavaScript inside those tags*
```
action = () => {
    fruits.map(fruit => <li>{fruit}</li>)
  }
  ```
#### In the render() function the JSX can only return one HTML tag
*Will return an error*
```
<div>
    Hello
</div>
<div>
    {nombre}
</div>
```
*To fix wrap all tags in another tag*
```
<div>
    <div>
        Hello
    </div>
    <div>
        {nombre}
    </div>
</div>
```
#### Single-line attribute expressions
A JSX tag's attribute value can be the result of a JavaScript expression. This is useful when you want to inline the full power of JavaScript within a JSX tag. JavaScript expressions are wrapped in a pair of curly braces **{}** instead of double quotes **""**.
```
const source = 'http://i.imgur.com/nVPXKtz.jpg';
const element = <img src={source} alt="Saffron Spice" />;
```
#### Multi-line attribute expressions
It's common for attributes of a JSX tag to stretch beyond your preferred line length. In cases like this, you can switch to defining one attribute per line. You should close the JSX tag on a separate line, just like curly braces {} and parenthesis () in JavaScript.
```
const element = (
  <input
    onChange={this.handleChange}
    type="text"
    value={this.state.searchTerm}
  />
);
```
#### Parenthesis
If you want to indent your HTML after a return statement you can use parenthesis
```
// valid with parenthesis
render() {
  return (
    <div>
      {text}
    </div>
  )
}

// THIS WON'T WORK
render() {
  return
    <div>
      {text}
    </div>
}
```
#### Ternary attribute expressions
The only conditional statement that works inside of JSX is a ternary expression. An if statement doesn't work because JSX is just syntactic sugar for JavaScript function calls.
```
const isHealthy = false;
const element = <div className={isHealthy ? 'hide' : 'show'} />;
```
#### Conditionals
In addition to attributes, a ternary expression can be used to return a child of a JSX tag.
```
const isHealthy = false;
const element = <div>
  {isHealthy ? <p>Yuck!</p> : <p>Delicious!</p>}
</div>;
```
*If a ternary expression isn't robust enough, you can use an if statement outside of your JSX.*
```
const isHealthy = false;
let message;

if (isHealthy) {
  message = <p>Yuck!</p>;
}
else {
  message = <p>Delicious!</p>;
}

const element = <div>
  {message}
</div>;
```
#### Styles
Styles are the same as DOM manipulation in JavaScript, use camel case
```
const styles = {
  backgroundColor: 'darkblue',
  color: 'lightgreen',
};

const element = <p style={styles}>Happy Grillmore</p>;
```