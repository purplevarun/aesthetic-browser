import React from 'react';
import "./Search.css";
import Button from "@material-ui/core/Button";
const Search = () => {
    const search = e => {
        e.preventDefault();
        // alert ("hello world");
    }
    return (
        <div className="search">
            <div className="search__input">
                <input/>
                <img onClick={search} src="search.png" width="50px" className="search-pic"/>
            </div>
            <div className="search__buttons">
                <Button onClick={search} color="secondary" variant="outlined">Search</Button>
            </div>
        </div>
    )
}
export default Search;