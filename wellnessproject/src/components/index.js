import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import API from "../utils/API";

const IndexPage = () => {
    const [responseData, setResponseData ] = useState('')
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if(!search){
            return;
        }

        API.getData(search)
        .then((res)=> {
            console.log(res);
            console.log(res.data[0].foodNutrients[4])
        })
        .catch(err=> setError(err));
    }, [search]);


    const handleInputChange = event => {
        setSearch(event.target.value);
        console.log(setSearch);
    }



    

    // const fetchData = (e) => {
    //     e.preventDefault()

    //     API.getData()
    //     .then((response)=> {
    //         setResponseData(response.data);
    //         console.log(response)
    //         //console.log(response.data[0].foodNutrients)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })

    // }

    return (
        <div>
            <SearchForm
            handleInputChange={handleInputChange}
            results={search}
            />
        </div>
        
    );

}


export default IndexPage;