import React, { useState } from "react";


function SearchResultsOne(props){    
    console.log(props.items)
    const [numberArray, setnumberArray] = useState(["203", "204","205","208","269","307","401"])

    return(
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" data-column="one">BrandOwner</th>
                        <th scope="col" data-column="two">Data Type</th>
                        <th scope="col" data-column="three">Description</th>
                        <th scope="col" data-column="four">fdcId</th>
                        <th scope="col" data-column="five">Protein (Grams)</th>
                        <th scope="col" data-column="six">Total Fat</th>
                        <th scope="col" data-column="six">Total Carbohydrates</th>
                        <th scope="col" data-column="six">Energy Amount</th>
                        <th scope="col" data-column="six">Sugars</th>
                        <th scope="col" data-column="six">Sodium</th>
                        <th scope="col" data-column="six">Vitamin C</th>
                    </tr>
                </thead>
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