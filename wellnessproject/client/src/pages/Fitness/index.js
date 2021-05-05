import React, { useState } from "react";
import './fitness.css';
import Intro from '../../components/FitnessIntro';
import AddWorkout from "../../components/AddWorkout";
import DailyWorkouts from "../../components/DailyWorkouts";
import FitnessTip from "../../components/FitnessTip";
import FitnessMeter from "../../components/FitnessMeter";
import workouts from '../../workouts/workouts.json';
const Fitness = () => {
    const [workout, setWorkout] = useState(workouts);
    console.log(workout.id);
    return (
        <div className='fitness-page'>
            <Intro />
            <div className='row fitness-components'>
                <div className='col-md-1'></div>
                <div className='col-md-5'>
                    <DailyWorkouts
                    workouts={workout} />
                </div>
                <div className='col-md-5'>
                    <AddWorkout />
                    <div className='row fitness-featurs'>
                        <div className='col-md-1'></div>
                        <FitnessTip />
                        <FitnessMeter />
                    </div>
                </div>                
            </div>
        </div>
    ) 

}

export default Fitness;