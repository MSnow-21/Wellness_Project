import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import API from "../utils/API";

const IndexPage = () => {
    const [search, setSearch] = useState("");
    const [title, setTitle] = useState("");
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
            setTitle(res.data)
            console.log(res);
            console.log(res.data[0].foodNutrients[4])
        })
        .catch(err=> setError(err));
    }, [search]);


    const handleInputChange = event => {
        setSearch(event.target.value);
        console.log(event.target.value);
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