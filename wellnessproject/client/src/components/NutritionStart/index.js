import React from "react";
import { Spring } from "react-spring";

function NutritionStart(){

    return(
       <Spring
       from={{ opacity: 0 }}
       to={{ opacity: 1 }}
       >

        {props => (
            <div style={props}>
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1>Hello</h1>
                </div>
            

            </div>
        )}
        </Spring>
    )
}


export default NutritionStart;