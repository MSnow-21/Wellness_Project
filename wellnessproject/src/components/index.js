import React from "react";
import API from "../utils/API";

const IndexPage = () => {
    let [responseData, setResponseData ] = React.useState('')

    const fetchData = (e) => {
        e.preventDefault()

        API.getData()
        .then((response)=> {
            setResponseData(response.data);
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })

    }

    return (
        <div>
            <h1>{responseData.title}</h1>
            <button onClick={(e) => fetchData(e)} type="button">Click Me for Data</button>
            {responseData.dates && responseData.dates.map(date => {
                    return <p>{date}</p>
                })}
        </div>
        
    )

}


export default IndexPage;