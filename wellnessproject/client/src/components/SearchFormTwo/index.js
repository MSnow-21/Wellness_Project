import React from "react";
import "./style.css"

function SearchFormTwo(props){
    return(
        <form className="search">
            <div className="form-group">
                <label htmlFor="language">Edaman Food and Grocery Database</label>
                <input
                 value={props.search}
                 onChange={props.handleInputChangeTwo}
                 name="term"
                 type="term"
                 className="form-control"
                 placeholder="Search for Nutrional Values"
                 id="search"
                />
            </div>
        </form>
    );
}

export default SearchFormTwo;