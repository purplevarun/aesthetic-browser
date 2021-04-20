import React from 'react';
import "./Search.css";
import Button from "@material-ui/core/Button";
const Search = () => {
    return (
        <div className="search">
            <div className="search__input">
                <input/>
                <img src="search.png" width="50px"/>
            </div>
            <div className="search__buttons">
                <Button color="secondary" variant="outlined">Search</Button>
            </div>
        </div>
    )
}
export default Search;