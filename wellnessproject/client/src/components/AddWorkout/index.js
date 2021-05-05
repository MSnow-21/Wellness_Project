import React from 'react';

const AddWorkout = () => {
    return (
        <form className='add-workout'>
            <h2>Add a workout!</h2>
            <div>
                <input
                className='workout'
                placeholder='Workout'>
                </input>
            </div>    
        </form>
    )
}
export default AddWorkout;

