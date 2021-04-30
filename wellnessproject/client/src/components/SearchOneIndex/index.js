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

    const handleInputChange = event => {
        setSearch(event.target.value);
        console.log(event.target.value);
    }

    return(
        <div>
            <SearchFormOne
            handleInputChange={handleInputChange}
            result={search}
            />
        </div>
    )
}

export default IndexPageOne;