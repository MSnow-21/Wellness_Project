//!!!! !!!! !!!! !!!! !!!!
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link, withRouter, useHistory } from 'react-router-dom';
import PropTypes from "prop-types";
import { userStats } from "../../actions/authActions";
import classnames from "classnames";
import './statentry.css';

const Stats = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [date, setDate] = useState('');
    const [workout, setWorkout] = useState('');
    const [duration, setDuration] = useState('');
    const [Social, setSocial] = useState('');
    const [Calories, setCalories] = useState('');
    const [errors, setErrors] = useState('');

    const handleDateChange = event => setDate(event.target.value);
    const handleWorkoutChange = event => setWorkout(event.target.value);
    const handleDurationChange = event => setDuration(event.target.value);
    const handleSocialChange = event => setSocial(event.target.value);
    const handleCaloriesChange = event => setCalories(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();

        const newStat = {
            Date: date,
            Workout: workout,
            Duration: duration,
            Social: Social,
            Calories: Calories,
        };
       dispatch(userStats(newStat))
        .then(() => {
            history.push('/')
            console.log("worked")
          //setSuccessful(true);
        })
        .catch(() => {
            console.log("didnt work")
          //setSuccessful(false);
        });
    };
    

    return (

    <div>
        <div className='Stat-head'>
            <h3>Enter your Stats!</h3>
            </div>
            <div className='stat-form'>
                <form>
                    <div>
                            <input 
                            id='date'
                            type='date'
                            placeholder='Date'
                            onChange={handleDateChange}
                            className={classnames('', {
                                invalid: errors.date
                            })}
                            />
                            <span>{errors.date}</span>
                        </div>
                        <div>
                            <input
                            id='workout'
                            type='text'
                            placeholder='Workout' 
                            onChange={handleWorkoutChange}
                            className={classnames('', {
                                invalid: errors.workout
                            })}
                            />
                            <span>{errors.workout}</span>
                        </div>
                        <div>
                            <input
                            id='Duration'
                            type='number'
                            placeholder='Workout Duration'
                            onChange={handleDurationChange}
                            className={classnames('', {
                            invalid: errors.duration
                            })}
                            />
                            <span>{errors.duration}</span>
                        </div>
                        <div>
                            <input
                            id='Social'
                            type='number'
                            placeholder='Social Activity'
                            onChange={handleSocialChange}
                            className={classnames('', {
                            invalid: errors.Social
                            })}
                            />
                            <span>{errors.Social}</span>
                        </div>
                        <div>
                            <input
                            id='Calories'
                            type='number'
                            placeholder='Calories'
                            onChange={handleCaloriesChange}
                            className={classnames('', {
                            invalid: errors.Calories
                            })}
                            />
                            <span>{errors.Calories}</span>
                        </div>
                        <div>
                            <button 
                            className='stat-bttn'
                            type='submit'
                            onClick={handleSubmit}
                            >
                            Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
    )
}

Stats.propTypes = {
    userStats: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

export default connect(
    mapStateToProps,
    { userStats }
) (withRouter(Stats));

