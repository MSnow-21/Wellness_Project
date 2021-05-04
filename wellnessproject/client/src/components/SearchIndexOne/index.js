import React, { useEffect, useState} from "react";
import SearchFormOne from "../SearchFormOne/";
import API from "../../utils/API";
import SearchResultsOne from "../SearchResultsOne/index";
import TableBody from "../TableHeadingOne";

const IndexPageOne = () => {
    const [search, setSearch] = useState("");
    const [items, setItems] = useState([]);
    const [error, setError] = useState("");
    
    useEffect(() => {
        if(!search){
            return;
        }

        API.getData(search)
        .then((res)=>{
            console.log(res)
            console.log(res.data)
            setItems(res.data)
        })
        .catch(err=> setError(err));
    },[search]);

    const handleInputChange = event => {
        event.preventDefault();
        setSearch(event.target.value);
        console.log(event.target.value);
    }

    const handleSubmitHandler = (event) => {
        event.preventDefault()
        console.log("You are submitting the value")
    }

    return(
        <div>
            <SearchFormOne
            submit={handleSubmitHandler}
            handleInputChange={handleInputChange}
            result={search}
            />
            <SearchResultsOne
              items={items}           
            />
        </div>
    )
}

export default IndexPageOne;