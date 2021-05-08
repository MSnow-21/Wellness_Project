import React, { useState, useEffect } from 'react';
import JournalEntry from '../../components/JournalEntries';
import JournalForm from '../../components/JournalForm';
import "./JournalStyle.css";
import NoteContextProvider from '../../contexts/NoteContext';

const Journal = () => {
    const [date, setDate] = useState();
    const [entries, setEntries] = useState([]);
    const [userInput, setUserInput] = useState()

    const onChange = (event) => {
        setUserInput(event.target.value);
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        if (userInput === '') {
            console.log('Must contain note')
        }
        if (entries === []) {
            setEntries(userInput);
        }
        else {
            setEntries(entries + userInput);
        }
    }

    return (
        <div className='Journal'>
            <NoteContextProvider>
                <JournalForm
                    onSubmit={onSubmit}
                    onChange={onChange} 
                />
            <div>
                <JournalEntry
                entries = {entries} 
                />
            </div>
            </NoteContextProvider>
        </div>
    );
    
    }

    export default Journal;