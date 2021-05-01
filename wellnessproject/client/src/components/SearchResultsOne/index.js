import React from "react";

const SearchResultsOne = (props) => {
    console.log(props)
    console.log(props.items);
    
    
    return(
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" data-column="one">Brand Owner</th>
                        <th scope="col" data-column="two">Data Type</th>
                        <th scope="col" data-column="three">Description</th>
                        <th scope="col" data-column="four">fdcId</th>
                        <th scope="col" data-column="five">Food Nutrient Data 1</th>
                        <th scope="col" data-column="six">Food Nutrient Data 2</th>
                    </tr>
                </thead>

            </table>
        </div>
     )

}



export default SearchResultsOne;