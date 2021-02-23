import { useState } from 'react';
import {useEffect } from 'react';
import TableCell from './TableCell';

const axios = require('axios').default;

let API_Key = "8ccfdf60"
var movieID = "tt3896198"

let baseURL = "https://www.omdbapi.com/"

export const API = (props) => {
    var res;

    let [searchResults, setsearchResults] = useState([])

    useEffect(() => {
        var tableClass = document.getElementsByClassName("table-data") 
        tableClass = "usewEffect Text"

    }, [searchResults])

    // console.log("WE ARE HERE")
    // console.log(props.searchTerm)
    // axios.get(baseURL + '/?apikey=' + API_Key + "&s=" + props.searchTerm)
    //     .then((response) => {
    //         // handle success
    //         setsearchResults(searchResults = response.data["Search"])
    //         console.log(searchResults)
    //     })

    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //         return (error);
    //     })
    //     .then(function () {
    //         // always executed
    //     });
    return (<>
        {/* <p>{searchResults}</p> */}
        <div class="table-data"></div>
        <h1>HEY YOU</h1>
    </>);
}

export default API;