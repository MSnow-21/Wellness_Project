import React from "react";
import './fitness.css';
import Intro from '../../components/FitnessIntro';
import AddWorkout from "../../components/AddWorkout";
import DailyWorkouts from "../../components/DailyWorkouts";
import FitnessTip from "../../components/FitnessTip";
import FitnessMeter from "../../components/FitnessMeter";
const Fitness = () => {
    return (
        <div className='fitness-page'>
            <Intro />
            <div className='row'>
                <div className='col-md-6'>
                    <AddWorkout />
                </div>
                <div className='col-md-6'>
                    <div className='row'>
                        <DailyWorkouts />
                    </div>
                    <div className='row'>
                        <FitnessTip />
                        <FitnessMeter />
                    </div>
                </div>                
            </div>
        </div>
    ) 

}

export default Fitness;