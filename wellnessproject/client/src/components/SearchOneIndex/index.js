import React, { useEffect, useState} from "react";
import SearchFormOne from "../SearchFormOne/index";
import API from "../../utils/API";

const IndexPageOne = () => {
    const [search, setSearch] = useState("");
    const [item, setItems] = useState([]);
    const [error, setError] = useState("");
    
    useEffect(() => {
        if(!search){
            return;
        }

        API.getData(search)
        .then((res)=>{
            console.log(res.data)
            setItems(res.data)
        })
        .catch(err=> setError(err));
    },[search]);



    
}