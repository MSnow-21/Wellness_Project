import React from 'react';
import WorkoutCards from '../WorkoutCard';

const DailyWorkouts = ({ workouts }) => {
    return (
        <div className='daily-workouts col-md-12'>
            <label>Choose a workout!</label>
            <select className='workout-options'>
                <option>Chest/Tries</option>
                <option>Back/Bies</option>
                <option>Full Upper Body</option>
                <option>Yoga</option>
                <option>Legs</option>
                <option>Core</option>
            </select>
            <WorkoutCards />
        </div>


    )
}

export default DailyWorkouts;