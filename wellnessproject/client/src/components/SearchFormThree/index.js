import React from "react";

function SearchFormThree(props){
    return(
      <form className="search">
        <div className="form-group">
            <label htmlFor="language">Search Three:</label>
              <input
              value={props.search}
              onChange={props.handleInputChangeThree}
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

export default SearchFormThree;