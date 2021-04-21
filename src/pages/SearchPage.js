import React from "react";
import { useStateValue } from "../StateProvider";
import "./SearchPage.css";
const SearchPage = () => {
    const [{term}, dispatch] = useStateValue();
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