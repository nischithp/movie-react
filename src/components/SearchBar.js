import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './Button'

const SearchBar = props => {
    return (
        
        <div>
            <center>
            Search: <input type="text" placeholder="Enter your search term here" id="searchBar"></input>
            <Button name="Search" action="search"></Button>
            </center>
        </div>
    )
}

SearchBar.propTypes = {

}

export default SearchBar
