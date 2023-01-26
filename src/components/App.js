import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {

    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID MJC-2pJ5_eX8nToQ5BT26z_3ZJX49TOjGK_WJ_mhJbo'
            },
        })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '30px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
};

export default App;
