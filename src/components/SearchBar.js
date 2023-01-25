import React from "react";

/*
Here we will use a class component to be able to use state for user input
*/
class SearchBar extends React.Component {

    onInputChange(event) {
        console.log(event.target.value)
    }
    /*
    we dont add the () on this.onInputChange bc we dont want it to be called
    when the component is first rendered, so we only pass it the reference bc its an event
    handler with callbacks
    */
    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onInputChange}></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;