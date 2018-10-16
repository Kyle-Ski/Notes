# State and Properites (props)
## State
* State is an Object, and when state changes, React re-renders the component and updates the UI.
* You never alter state directly - instead you call setState.
* State is something that is on the inside of the React module
* You add state in your constructor
```
constructor(props){
    super(props)
    this.state = {
        number: 0,
        color: 'blue',
        isActive: true
    }
}
```
*Now we have access to all of these like they were variables*
#### setState() 
You pass it an object:
```
 action = () => {
    console.log('this is the action')
    this.setState({number: this.state.number + 1})
}
```
*Without the fat arrow you have to bind() in the constructor like:*
```
constructor(props){
    super(props);
    this.state = {
        number: 1, 
        color: "blue", 
        is_active: true
        };
    this.action = this.action.bind(this);
}
action(){
    console.log("this is the action! ");
    this.setState({number: this.state.number+1})
}
```
*setState() creates a new state and doesn't mess with the old state*

## Props
* Props are something that is passed into the module
* They are usually declared as variables in the index.js file
* Then they are passed through like:
```
const things = [   
    {name:"cherry", color: "red"},
    {name:"cocunut", color: "brown"},
    {name:"gold", color: "gold"}      
]

ReactDOM.render(<App details = {things} />, document.getElementById('root'));
                        ^^^^^
```
