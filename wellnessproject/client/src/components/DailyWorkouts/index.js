import React, { useState } from 'react';
import WorkoutCards from '../WorkoutCard';
import workouts from '../../workouts/workouts.json';
import FitnessImage from '../FitnessImage';
const DailyWorkouts = () => {
    const [excersize, setExcersize] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [muscles, setMuscles] = useState('');
    let index = 0;

    const handleChange = (event) => {
        let inputValue = event.target.value
        setUserInput(inputValue)
        filterWorkout();
    }
    const filterWorkout = () => {
        if (userInput === 'Chest/Tries') {
            index = 0
            }
        if (userInput === 'Back/Bies') {
            index = 1
            }
        if (userInput === 'Full Upper Body') {
            index = 2
            }
        if (userInput === 'Legs') {
            index = 3
            }
        setExcersize(workouts[index].excersizes)
        setMuscles(workouts[index].muscles)
        }
    return (
        <div className='daily-workouts'>
            
            <div className='row'>
                <div className='col-md-6 center'>
                    <h3 className='col-md-12'>Choose a workout!</h3>
                    <br />
                    <select onChange={handleChange} className='workout-options col-md-3'>
                        <option>Chest/Tries</option>
                        <option>Back/Bies</option>
                        <option>Full Upper Body</option>
                        <option>Legs</option>
                    </select>
                    <div className='row'>
                        <div className='col-md-12'>
                            <FitnessImage />
                        </div>
                    </div>
                </div>
                <div className='col-md-6 center'>
                    <WorkoutCards
                        muscles = {muscles} 
                        excersize = {excersize}
                    />
                </div>
            </div>
        </div>


    )
}

export default DailyWorkouts;