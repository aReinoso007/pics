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
```javascript
functionName = (event) => {
    this.state.propName
}
```
Or we could use constructors to always override the initialized props. 
There is a third way
```javascript
onFormSubmit(event){
    event.preventDefault();
    console.log(this.state.term)
}

<form onSubmit={(event)=> this.onFormSubmit(event)} >

</form>

```
## Passing props 
### Parent Component
``` javascript
    function App(){
        const handleSubmit = (term)=>{
            console.log('term received ', term)
        };

        return (
            <div>
                <SearchBar onSubmit={handleSubmit}>
            </div>
        )
    }
```
As shown before, we add the prop ```onSubmit``` to the component
and pass it an arrow fuction that will receive the value gathered in the child
component that has the key of ```term```
### Child Component
A way to receive props in a function component is the following:
```javascript
function SearchBar({onSubmit})=>{
    const handleFormSubmit = (event) =>{
        event.preventDefault(); //to not reload the page when we hit enter
        onSubmit('')
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                />
            </form>
        </div>
    )

}
```
#### Working with inputs

* create a new piece of state using ```useState```
    ```javascript
    const [term, setTerm] = useState('');
    ```
* create an event handler to watch for the ```onChangeEvent``` event
    ```javascript
    const handleChange = ()=>{

    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                    onChange={handleChange}
                />
            </form>
        </div>
    )
    ```
* When the ```onChange``` event fires, get the value from the input
     ```javascript
    function SearchBar({onSubmit})=>{
        const [term, setTerm] = useState('');
        const handleFormSubmit = (event) =>{
            event.preventDefault(); //to not reload the page when we hit enter
            onSubmit('')
        };
        const handleChange = (event)=>{
            //getting value from the input
         console.log(event.target.value)
        };

        return (
            <div>
                <form onSubmit={handleFormSubmit}>
                    <input
                        onChange={handleChange}
                    />
                </form>
            </div>
        )
    }
    ```
* Take the value from the input and use it to update the state
     ```javascript
    function SearchBar({onSubmit})=>{
        const [term, setTerm] = useState('');

        const handleFormSubmit = (event) =>{
            event.preventDefault();
            onSubmit('')
        };
        const handleChange = (event)=>{
            //Updating the value
            setTerm(event.target.value);
        };

        return (
            <div>
                <form onSubmit={handleFormSubmit}>
                    <input
                        onChange={handleChange}
                    />
                </form>
            </div>
        )
    }
    ```
* Pass the state to the input as the value prop
    ```javascript
    function SearchBar({onSubmit})=>{
        const [term, setTerm] = useState('');

        const handleFormSubmit = (event) =>{
            event.preventDefault();
            onSubmit('')
        };
        const handleChange = (event)=>{
            setTerm(event.target.value);
        };

        return (
            <div>
                <form onSubmit={handleFormSubmit}>
                    <input
                    //setting the value to force the component to show the input value
                        value={term}
                        onChange={handleChange}
                    />
                </form>
            </div>
        )
    }
    ```