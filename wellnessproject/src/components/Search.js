import React, { Component } from "react";
import SearchForm from "./SearchForm";
import API from "../utils/API";

class Search extends Component {
    state = {
        results: [],
    };

    componentDidMount() {
        API.getSearchResultsOne()
        .then(res=> this.setState({ results: res.foodNutrients}))
        .catch(err=> console.log(err));

        console.log(this.state.results);

    };

    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(event);
    };

    render() {
        return(
            <div>
                <SearchForm>
                    {this.handleFormSubmit}
                    {this.handleInputChange}
                    </SearchForm>
            </div>
        )
    }




}

export default Search;


