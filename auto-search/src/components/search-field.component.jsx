import React from 'react';

import './search-field.styles.css';

const SearchField = props => {
    return (
        <div id="search">
            <input
                type = "text"
                className = "input"
                name = "input"
                value = { props.input }
                onChange = { (evt) => props.onInput(evt.target.value) }
            ></input>

            <button className = "btn-search" onClick = {() => props.urlToSearch()}>SEARCH</button>
            <small className = "errors">{ props.errors }</small>
        </div>
    )
}

module.exports = SearchField