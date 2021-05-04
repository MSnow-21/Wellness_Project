import React, { useState } from "react";
import TableHeadingOne from "../TableHeadingOne";


function SearchResultsOne(props){    
    const [numberArray, setnumberArray] = useState(["203", "204","205","208","269","307","401"])

    return(
        <div>
            <table className="table">
                <TableHeadingOne/>
                {props.items.map(({ brandOwner,dataType, description, fdcId ,foodNutrients}, i) => (
                <tbody>
                    <tr key={i}>
                        <th scope="row">#</th>
                        <td>{brandOwner}</td>
                        <td>{dataType}</td>
                        <td>{description}</td>
                        <td>{fdcId}</td>
                        {foodNutrients.filter(item=> numberArray.includes(item.number)).map((food,j) =>
                        <td key={j}>{food.name} Amount: {food.amount} {food.unitName}</td>)}
                    </tr>
                </tbody>
                ))
            }
            </table>
        </div>
        
    );
}

export default SearchResultsOne;