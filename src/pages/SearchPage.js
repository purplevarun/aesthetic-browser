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
    var counter = 1;
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
                <p className="resultCount">
                    {data?.searchInformation.formattedTotalResults} Results
                    in {data?.searchInformation.formattedSearchTime} seconds
                </p>
                
                {data?.items.map(item => (
                    <div className="every_result">
                        <h3>Result {counter++} :</h3>
                        <img src={item.pagemap?.cse_thumbnail[0]?.src} className="thumb"/>
                        <a href={item.link} className="itemnamelink">
                            <h2 className="itemname">
                                {item.title}
                            </h2>
                        </a>
                        
                        <a href={item.link} className="sitename">{item.displayLink}</a>
                        
                        <p className="descrip">
                            {item.snippet}
                        </p>
                        <br/>
                        <hr color="blue" style={{opacity:"50%",margin:"0px"}}/>
                        
                    </div>
                ))}
            </div>)}
        </div>
    )
}
export default SearchPage;