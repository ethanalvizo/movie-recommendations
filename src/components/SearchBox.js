import React from 'react'

const SearchBox = (props) => {
    return (
        <div className="col col-sm-4">
            <input
                className= 'form-control'
                vlaue={props.value}
                onChange={(event) => props.setSearch(event.target.value)}
                placeholder='Type to search...'
            />
        </div>
    )
}

export default SearchBox
