import React, { useState } from 'react';
import "./Search.css";
import Button from "@material-ui/core/Button";
import { useHistory } from 'react-router-dom';
import { actionTypes } from '../reducer';
import { useStateValue } from "../StateProvider";
const Search = (givenWidth="50px") => {
    const [{},dispatch] = useStateValue();
    const [input,setInput] = useState("");
    const history=useHistory();
    const search = e => {
        e.preventDefault();
        // alert (input);

        dispatch({
            type : actionTypes.SET_SEARCH_TERM,
            term : input
        })

        history.push('/search');
    }
    return (
        <form className="search">
            <div className="search__input">
                <input value={input} onChange={e=>setInput(e.target.value)}/>
                <img onClick={search} src="search.png" width="50px" className="search-pic"/>
            </div>
            
            
            <div className="search__buttons">
                <Button type="submit" onClick={search}>Search</Button>
            </div>
            
        </form>
    )
}
export default Search;