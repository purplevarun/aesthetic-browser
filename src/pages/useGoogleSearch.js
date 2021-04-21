import {useState, useEffect} from "react";
import API_KEY from "./keys";
const CONTEXT_KEY = "dce476ebd27b0bc5d";
const useGoogleSearch = () => {
    const [date, setData] = useState(null);
    useEffect(()=> {
        const fetchDara = async() => {
            fetch (
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}
                &cx=${CONTEXT_KEY}&q=${term}`         
            )
            .then (response => response.json())
        }
    }, [term])
    return {data};
};
export default useGoogleSearch;