import React from "react";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="language">Search Term:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
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

export default SearchForm;
