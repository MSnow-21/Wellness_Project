import React from "react";

function SearchResultsTwo(props){
    
    console.log(props.items)

    return(
        <div>
            {props.items.map(({food},i)=> (
            <div key={i} className="card" >
                <img className="img-card-top" src={food.image} alt="food image"></img>
                <div className="card-body">
                    <h5 className="card-title">{food.category}</h5>
                    <p className="card-text">{food.categoryLabel}</p>  
                    <p className="card-text">{food.label}</p>                      
                </div>
                    {Object.values(food.nutrients).map((nutrient,j) => (
                        <ul key={j} className="list-group list-group-flush">
                        {nutrient}
                        </ul>
                    ))
                    }
            </div>
            ))
                }
        </div>




    );
}

export default SearchResultsTwo;