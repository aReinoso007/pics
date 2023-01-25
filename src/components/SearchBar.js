import React from "react";

/*
Here we will use a class component to be able to use state for user input
*/
class SearchBar extends React.Component {


    render() {
        return (
            <div>
                <form>
                    <input type="text"></input>
                </form>
            </div>
        );
    }
}

export default SearchBar;