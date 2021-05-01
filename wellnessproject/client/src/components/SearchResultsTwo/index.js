import React from "react";

function SearchResultsTwo(props){
    
    console.log(props.items)

    return(
        <div className="card">
            {props.items.map(({food},i) => (
                <div key={i} className="cardbody">
                    <img className="img-card-top" src={food.image} alt="food image"></img>
                    <div className="card-body">
                        <p className="card-text">{food.category}</p>
                        <p className="card-text">{food.categoryLabel}</p>
                        <p className="card-text">{food.label}</p>
                    </div>
                    {console.log(food.nutrients)}

                    {Object.values(food.nutrients).map((nutrient,j) => (
                        <ul key={j} >{nutrient}</ul>
                    ))

                  }
                </div>

            ))}
  
        </div>

    );
}

export default SearchResultsTwo;