import React, { useState } from 'react';

const WorkoutCards = ({ muscles, excersize}) => {

    const handleClick = (event) => {
        console.log(event.target)
    }

    const listOfExcersizes = excersize.map((e) =>
    <div>
        <button onClick={handleClick} className='workout-bttn' value={e}>
        <li key={e} className='this'>
            {e} <input type='checkbox' className='check-box'></input>
        </li>
        </button>
    </div>
    );

    return (
        <div className='content'>
            <div className='excersizes col-md-12'>
               <h3 className='col-md-12'>Muscle Group: {muscles} </h3>
            </div>
            <ul className='row'>
                <div className='col-md-6'>
                    <p className>{listOfExcersizes}</p>
                    <button>Finsish Workout!</button>
                </div>
                <div className='col-md-6'>
                </div>
            </ul>
        </div>
        
    )
}

export default WorkoutCards;