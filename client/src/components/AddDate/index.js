import React from 'react';

const AddDate = () => {
    return (
        <form className='add-date'>
            <h2>Today's Date:</h2>
            <div>
                <input
                className='date'
                placeholder='Date'>
                </input>
            </div>    
        </form>
    )
}
export default AddDate;