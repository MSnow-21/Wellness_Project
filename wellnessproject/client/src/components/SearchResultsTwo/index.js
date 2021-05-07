import React from "react";
import "./style.css";

function SearchResultsTwo(props){
    
    console.log(props.items)
    
    const getNutrients = (nutrients) => {
        const nutrientArray = []
        for (const nutrient in nutrients){
            nutrientArray.push([nutrient,nutrients[nutrient]])
        }
        return nutrientArray;

    }

    return(  
        <div className="card carddiv">
        {props.items.map(({food},i) => (
            <div key={i} className="cardbody picturecard alert alert-light">
                <img className="img-card-top" src={food.image} alt="food image"></img>
                <div className="card-body">
                    <p className="card-text foodtext alert alert-dark">{food.label}</p>
                </div>
      

                
                {getNutrients(food.nutrients).map((nutrient,j) => (
                    <ul key={j}>
                        <li className="listtext alert alert-success">{nutrient[0]+": "+nutrient[1]}</li>
                    </ul>
                ))

              }
            </div>
        ))}  
    </div>
        
    );
}

export default SearchResultsTwo;