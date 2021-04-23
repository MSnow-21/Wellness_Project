import React from "react";

function SearchResults(props){
    return(
        <ul className="list-group search-results">
            <li className="list-group-item">
                <h2>Description: {props.description}</h2>
            </li>
            <li>
                <h2>Unit: {props.protein},  Amount: {props.proamount} Unit: {props.unit}</h2>
            </li>
    
        </ul>
    );
}

export default SearchResults;