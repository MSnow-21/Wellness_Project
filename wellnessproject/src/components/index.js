import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import API from "../utils/API";

const IndexPage = () => {
    const [search, setSearch] = useState("");
    const [description, setDescription] = useState("");
    const [protein, setProtein] = useState("");
    const [proamount, setProAmount] = useState("");
    const [unit, setUnit] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if(!search){
            return;
        }

        API.getData(search)
        .then((res)=> {
            if(res.data.length === 0){
                throw new Error("No results Found.")
            }
            if(res.data.status === "error"){
                throw new Error(res.data.message);
            }
            setDescription(res.data[0].description)
            setProtein(res.data[0].foodNutrients[0].name)
            setProAmount(res.data[0].foodNutrients[0].number)
            setUnit(res.data[0].foodNutrients[0].unitName)
    
            console.log(res);
            console.log(res.data[0].foodNutrients[4].amount)
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
            description={description}
            protein={protein}
            proamount={proamount}
            unit={unit}
            />
        </div>
        
    );

}


export default IndexPage;