# Picture getter

## About 🔎
Fetching data from an API that shows pictures related to user input

## Event handlers and callbacks 🥽
### onClick
Whenever an user clicks on something
### onChange
User changes text in an input
### onSubmit
User submits a form

### Form elements
### Controlled components
User types input, then a callback gets invoked and inside that callback we get the value to update the value using ``` setState ```. When a component rerenders we take the value prop and update it, it overrides the value prop.
### Uncontrolled components
We have to reach into the DOM to get the value of the input, so without using state and props is harder to know the value at any given time. Data is not centralized and React does not manage the data and the DOM has all the values.

### ``` this ``` inside of a class
instance of SearchBar, we can use  ``` this ``` to reference the class and get properties and more.
So we use arrow functions to always reference the correct value rather than the value of the function.
```
functionName = (event) => {
    this.state.propName
}
```
Or we could use constructors to always override the initialized props. 
There is a third way
```
onFormSubmit(event){
    event.preventDefault();
    console.log(this.state.term)
}

<form onSubmit={(event)=> this.onFormSubmit(event)} >

</form>

```