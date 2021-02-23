import React, { useEffect } from 'react'
import { useState } from 'react'
import PropTypes from 'react'
import API from './API'
import TableCell from './TableCell'
const axios = require('axios').default;

let API_Key = "8ccfdf60"
let baseURL = "https://www.omdbapi.com/"

export const Button = (props, onClick) => {

    // Use useState and save the result of the API call to a state variable or list and then use that vairableto display data using an iterator

   let [searchTerm, setsearchTerm] = useState("")
   var [searchResults, setsearchResults] = useState("")
    var res = "";

    useEffect(() => {
        // effect
        return () => {
            <div>
            <API searchTerm={searchTerm}></API>
            </div>
        }
    }, [searchTerm])

    function search() {
        setsearchTerm (searchTerm = document.getElementById('searchBar').value)
        axios.get(baseURL + '/?apikey=' + API_Key + "&s=" + searchTerm)
        .then((response) => {
            // handle success
            setsearchResults(searchResults = response.data["Search"])
            console.log(searchResults)
        })

        .catch(function (error) {
            // handle error
            console.log(error);
            return (error);
        })
        .then(function () {
            // always executed
        });
    }

    if (props.action === "search") {
        return (
            <>
                <button className="btn" onClick={search} style={{ backgroundColor: props.color }}> {props.name} </button>
            </>
        )
    }

    return (
        <div class="API Response">
            <API searchTerm={searchTerm}></API>
        </div>)
}

Button.defaultProps = {
    color: "Black",
    name: "Add Item",
    action: "search"
}

Button.propTypes = {
    // action: PropTypes.func
}