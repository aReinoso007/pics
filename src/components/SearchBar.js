import React from "react";

/*
Here we will use a class component to be able to use state for user input
*/
class SearchBar extends React.Component {

    state = { term: '' };

    /* onInputChange(event) {
        console.log(event.target.value)
    } */

    /* onInputClick() {
        console.log('Click')
    }
 */
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
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        /*onChange={this.onInputChange}*/
                        /*onClick={this.onInputClick} */
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;