import React from 'react'
import './style.css'

const SearchBar = ({ value, handleSearchKey, clearSearchKey, formSubmit }) => {
    return (
        <div className='search-wrap'>
            <form onSubmit={formSubmit}>
                <input type="text" onChange={handleSearchKey} placeholder="Search By Catogory" value={value} />
                {value && <span onClick={clearSearchKey}>x</span>}
                <button>Go</button>
            </form>



        </div>
    )
}

export default SearchBar