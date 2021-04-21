import React from "react";
import { useStateValue } from "../StateProvider";
import "./SearchPage.css";
import useGoogleSearch from "./useGoogleSearch";
import response from "./response";
import { Link } from "react-router-dom";
import Search from "./Search";
const SearchPage = () => {
    const [{term}, dispatch] = useStateValue();
    // live api call
    // const {data} = useGoogleSearch(term);
    // local response
    const data = response;
    console.log(data);
    return (
        <div className='searchPage'>
            <div className="header">
                <Link to="/">
                    <img src="logo-main.png" width="300px"/>
                </Link>
                
                <Search/>
                
            </div>
            <hr/>
            {term && (<div className="results">
                <p className="resultCount">3 million</p>
            </div>)}
        </div>
    )
}
export default SearchPage;