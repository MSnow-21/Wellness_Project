import React from "react";
import './statstyle.css';
import Intro from '../../components/StatIntro';
import AddDate from "../../components/AddDate";
import AddWorkout from "../../components/AddWorkout";
import WorkoutDuration from "../../components/WorkoutDuration";
import SocialActivity from "../../components/SocialActivity";
import Calories from "../../components/Calories";
import Chart from "react-google-charts";

const Stats = () => {
    return (
        <body className='statbody'>
        <div className='stats-page'>
            <div className='stat'>
            <Intro />
            <div className='row'>
                <div className='col-md-6'>
                    <AddDate />
                </div>
                <div className='row'>
                <div className='col-md-6'>
                        <AddWorkout />
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                        <WorkoutDuration />
                        </div>
                        <div className='row'>
                        <div className='col-md-6'>
                        <SocialActivity />
                        </div>
                        <div className='row'>
                        <div className='col-md-6'>
                        <Calories />
                        </div>
                    <div className='chart' style={{ display: 'flex', maxWidth: 9000 }}>
                         <Chart
                            width={850}
                            height={500}
                            chartType="ColumnChart"
                            loader={<div>Loading Chart</div>}
                    data={[
                         ['Day', 'Workout Duration', 'Social Activity'],
                          ['Monday', 30, 120],
                            ['Tuesday', 60, 90],
                             ['Wednesday', 90, 45],
                             ['Thusday', 120, 60],
                             ['Friday', 60, 50],
                             ]}
                     options={{
                      title: 'Workout vs Social Activity',
                     chartArea: { width: '100%' },
                     hAxis: {
                     title: 'My Stats',
                    minValue: 0,
                     },
                 vAxis: {
                     title: 'Workout',
                     },
                     }}
                  legendToggle
                 />
</div>
</div>
                    </div>
                 </div>                
             </div>
         </div>
     </div>
     </div>
     </body>
    )
};

export default Stats;