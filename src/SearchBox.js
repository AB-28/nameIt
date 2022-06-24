import React from 'react';
import './SearchBox.css';

const SearchBox = ({ onInputChange }) => {
    return (
        <div className='search-container'>
            <input
                onChange={(event) => onInputChange()}
                placeholder='Type here'
                className='search-input'
            />
        </div>
    );
}
export default SearchBox;