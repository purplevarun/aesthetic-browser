import React from "react";
import { useStateValue } from "../StateProvider";
import "./SearchPage.css";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./response";
const SearchPage = () => {
    const [{term}, dispatch] = useStateValue();
    // live api call
    // const {data} = useGoogleSearch(term);
    // local response
    const {data} = Response;
    console.log(data);
    return (
        <div className='searchPage'>
            <div className="header">
                <h1>
                    {term}
                </h1>
            </div>
            <div className="results">

            </div>
        </div>
    )
}
export default SearchPage;