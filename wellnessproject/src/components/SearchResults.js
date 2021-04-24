import React from "react";

function SearchResults(props){    
    console.log(props.items)
    //const myItems = props.items
    //console.log(myItems)
    return(
        <ul className="list-group">
            {props.items.map(item => (
                <li className="list-group-item" key={item.fdcId}>
                    {item.description}
                </li>

            ))}
        </ul>
    );
}

export default SearchResults;