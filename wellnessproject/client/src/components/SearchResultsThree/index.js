import React from "react";

function SearchResultsThree(props){

    console.log(props.item)


    return(
        <div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" data-column="one">Brand Name</th>
                        <th scope="col" data-column="two">Item Name</th>
                        <th scope="col" data-column="three">Calories</th>
                        <th scope="col" data-column="four">Serving Size</th>
                        <th scope="col" data-column="five">Serving Unit</th>
                        <th scope="col" data-column="six">Total Fat</th>
                    </tr>
                </thead>
                <tbody>
                    {props.item.map(({fields},i) => (
                    <tr key={i} className="trone">
                        <th scope="row">1</th>
                        <td>{fields.brand_name}</td>
                        <td>{fields.item_name}</td>
                        <td>{fields.nf_calories}</td>
                        <td>{fields.nf_serving_size_qty}</td>
                        <td>{fields.nf_serving_size_unit}</td>
                        <td>{fields.nf_total_fat}</td>
                        </tr>
                        ))
                        }
                </tbody>
            </table>

        </div>
    );




}

export default SearchResultsThree;