import React from "react";
import IndexPageOne from "../SearchIndexOne";
import IndexPageTwo from "../SearchIndexTwo";
import IndexPageThree from "../SearchIndexThree";
import "./style.css"

function NutritionSearch(){
    return(
        <div>
            <div className="row areaone">
                <div className="col-md-12">
                    <h1>Hello, Possible Todo List Here</h1>
                    <p>Todo example: Add 20G's of protein to daily meal plan</p>
                    <p>Lower carb intake</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 indexpageone">
                    <IndexPageOne/>
                </div>
                <div className="col-md-1">

                </div>
                <div className="col-md-3">
                    <IndexPageTwo/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <IndexPageThree/>
                </div>
            </div>
        </div>
  


    )
}

export default NutritionSearch;