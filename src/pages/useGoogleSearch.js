import {useState, useEffect} from "react";
import API_KEY from "./keys";
const CONTEXT_KEY = "dce476ebd27b0bc5d";
const useGoogleSearch = (term) => {
    const [date, setData] = useState(null);
    useEffect(()=> {
        const fetchDara = async() => {
            fetch (
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}
                &cx=${CONTEXT_KEY}&q=${term}`         
            )
            .then (response => response.json())
            .then(result=>{
                setData(result)
            })
        }
    }, [term])
    return {data};
};
export default useGoogleSearch;