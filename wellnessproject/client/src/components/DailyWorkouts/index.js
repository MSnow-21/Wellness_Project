import React, { useState, useEffect } from 'react';
import WorkoutCards from '../WorkoutCard';
import workouts from '../../workouts/workouts.json';
import FitnessImage from '../FitnessImage';
import FitPics from '../FitPics';
const DailyWorkouts = () => {
    const [excersize, setExcersize] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [muscles, setMuscles] = useState('');
    const [fitnessImage, setFitnessImage] = useState([]);
    let index = 0;
     useEffect(() => {
        filterWorkout();
    }, [userInput])

    const handleChange = (event) => {
        let inputValue = event.target.value
        setUserInput(inputValue)
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
        setFitnessImage(FitPics[index]);
        }
    return (
        <div className='daily-workouts'>
            <div className='row'>
                <div className='col-md-6 center'>
                    <h3 className='col-md-12 fitness-headers'>Choose a workout!</h3>
                    <br />
                    <select onChange={handleChange} className='workout-options col-md-3'>
                        <option>Chest/Tries</option>
                        <option>Back/Bies</option>
                        <option>Full Upper Body</option>
                        <option>Legs</option>
                    </select>
                    <div className='row'>
                        <div className='col-md-12'>
                            <FitnessImage
                            fitnessImage={fitnessImage}
                            />
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