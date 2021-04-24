import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import API from "../utils/API";

const IndexPage = () => {
    const [search, setSearch] = useState("");
    const [items, setItems] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        if(!search){
            return;
        }

        API.getData(search)
        .then((res)=> {
            console.log(res.data[1].foodNutrients)
            console.log(res.data)
 
            setItems(res.data)

        })       

        .catch(err=> setError(err));
    }, [search]);



    const handleInputChange = event => {
        setSearch(event.target.value);
        console.log(event.target.value);
    }


    return (
        <div>
            <SearchForm
            handleInputChange={handleInputChange}
            results={search}
            />
            <SearchResults
            items={items}
            />
        </div>
        
    );

}


export default IndexPage;