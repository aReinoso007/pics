import React from "react";

/*
Here we will use a class component to be able to use state for user input
*/
class SearchBar extends React.Component {

    state = { term: '' };

    /*
    we dont add the () on this.onInputChange bc we dont want it to be called
    when the component is first rendered, so we only pass it the reference bc its an event
    handler with callbacks
    */
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;