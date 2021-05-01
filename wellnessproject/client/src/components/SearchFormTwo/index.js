import React from "react";

function SearchFormTwo(props){
    return(
        <form className="search">
            <div className="form-group">
                <label htmlFor="language">Search:</label>
                <input
                 value={props.search}
                 onChange={props.handleInputChangeTwo}
                 name="term"
                 type="term"
                 className="form-control"
                 placeholder="Search for Data"
                 id="search"
                />
            </div>
        </form>
    );
}

export default SearchFormTwo;