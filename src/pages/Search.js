import React, { useState } from 'react';
import "./Search.css";
import Button from "@material-ui/core/Button";
const Search = () => {
    const [input,setInput] = useState("");
    const search = e => {
        e.preventDefault();
        alert (input);
    }
    return (
        <div className="search">
            <div className="search__input">
                <input value={input} onChange={e=>setInput(e.target.value)}/>
                <img onClick={search} src="search.png" width="50px" className="search-pic"/>
            </div>
            <div className="search__buttons">
                <Button onClick={search} color="secondary" variant="outlined">Search</Button>
            </div>
        </div>
    )
}
export default Search;