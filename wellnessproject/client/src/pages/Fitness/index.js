import React, { useState } from "react";
import './fitness.css';
import Intro from '../../components/FitnessIntro';
import FitnessWorkouts from "../../components/FitnessWorkouts";

const Fitness = () => {
    return (
        <div className='fitness-page'>
            <Intro />
            <div className='row fitness-components'>
                <div className='col-md-1'></div>
                <div className='col-md-10 comp-down'>
                    <FitnessWorkouts />
                </div>               
            </div>
        </div>
    ) 

}

export default Fitness;