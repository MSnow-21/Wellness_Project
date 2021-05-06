import React, { useState } from "react";
import './fitness.css';
import Intro from '../../components/FitnessIntro';
import WorkoutCards from "../../components/WorkoutCard";
import DailyWorkouts from "../../components/DailyWorkouts";

const Fitness = () => {
    return (
        <div className='fitness-page'>
            <Intro />
            <div className='row fitness-components'>
                <div className='col-md-1'></div>
                <div className='col-md-10'>
                    <DailyWorkouts />
                </div>               
            </div>
        </div>
    ) 

}

export default Fitness;