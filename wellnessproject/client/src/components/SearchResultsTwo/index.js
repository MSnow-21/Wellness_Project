import React from "react";
import "./style.css";

function SearchResultsTwo(props){
    
    console.log(props.items)

    return(  
        <div className="card carddiv">
        {props.items.map(({food},i) => (
            <div key={i} className="cardbody picturecard">
                <img className="img-card-top" src={food.image} alt="food image"></img>
                <div className="card-body">
                    <p className="card-text">{food.label}</p>
                </div>
                {Object.values(food.nutrients).map((nutrient,j) => (
                    <ul key={j}>
                        <li className="listtext">{nutrient}</li>
                    </ul>
                ))

              }
            </div>
        ))}  
    </div>
        
    );
}

export default SearchResultsTwo;