import React from 'react';

import './heading.styles.css';

import { SearchField } from './search-field.component';

const Heading = props => {

    return ( 
        <div className="the-heading">
            <h3>SEARCH-LEO</h3>
            <SearchBar
                errors = { props.errors }
                input = { props.input }
                onInput = { props.onInput }
                urlToSearch = { props.urlToSearch }
            />
        </div>
        
    );
}

module.exports = Heading;