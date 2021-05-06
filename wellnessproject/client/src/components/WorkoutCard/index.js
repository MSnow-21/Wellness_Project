import React, { useState } from 'react';

const WorkoutCards = ({ muscles, excersize}) => {

    const handleClick = (event) => {
        console.log(event.target)
    }

    const listOfExcersizes = excersize.map((e) =>
    <div>
        <li key={e} className='this'>
            {e}
        </li>
    </div>
    );

    return (
        <div className='content'>
            <div className='excersizes col-md-12'>
               <h3 className='col-md-12'>Muscle Group: {muscles} </h3>
            </div>
            <ul className='row'>
                <div className='col-md-12'>
                    <p className>{listOfExcersizes}</p>
                    <button>Finsish Workout!</button>
                </div>
            </ul>
        </div>
        
    )
}

export default WorkoutCards;