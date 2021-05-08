import React, { useState } from 'react';
import JournalEntry from '../../components/JournalEntries';
import JournalForm from '../../components/JournalForm';
import "./JournalStyle.css"

const onChange = (event) => {
    console.log(event.target.value)
}

const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
}

const Journal = () => {
    const [entries, setEntires] = useState([]);

    return (
        <div className='Journal'>
            <JournalForm
            onSubmit={onSubmit}
            onChange={onChange} />
            <div className='row'>
                <JournalEntry />
            </div>
        </div>
    );
    
    }

    export default Journal;