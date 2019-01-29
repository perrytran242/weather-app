import React, { Component } from 'react';
import './style.css';

class SearchBar extends Component {
    state = {
        searchTerm: '',
    }

    handleSubmit = (e) => {
        const { getUserLocation } = this.props;
        const { searchTerm } = this.state;
        e.preventDefault();
        
        getUserLocation(searchTerm)

        this.setState({
            searchTerm: ''
        });
    }

    render() {
        return (
            <div className="margin-top ">
                <form onSubmit={this.handleSubmit} className="ui fluid action input" action="">
                    <input onChange={(e) => this.setState({ searchTerm: e.target.value })} value={ this.state.searchTerm } type="text" placeholder="Enter City..."/>
                    <div className="ui button">Search</div>
                </form>
            </div>
        )
    }
}

export default SearchBar; 