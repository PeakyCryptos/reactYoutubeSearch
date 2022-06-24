import React, { Component } from 'react';
 
class Searchbar extends Component {

    constructor(props) {
        super(props);
        
        
        this.state = { term: 'Reactive!' };
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearch(term);
    }

    render() {
        return (
            <div className='search-bar'>
                <input 
                    value = { this.state.term }    
                    onChange={ (event) => this.onInputChange(event.target.value)} 
                />
            </div>
        );
    }
}

export default Searchbar;