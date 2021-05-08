import React from 'react';

const Calories = () => {
    return (
        <form className='add-calories'>
            <h2>Daily Calorie Intake</h2>
            <div>
                <input
                className='calories'
                placeholder='Calorie Intake'>
                </input>
            </div>    
        </form>
    )
}
export default Calories;