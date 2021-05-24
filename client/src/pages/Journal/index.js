import React, { useState, useEffect } from 'react';
import JournalEntry from '../../components/JournalEntries';
import JournalForm from '../../components/JournalForm';
import NoteContextProvider from '../../contexts/NoteContext';
import { Box } from '@material-ui/core';
import './styles.css';
import useStyles from './styles';


const Journal = () => {
    const [date, setDate] = useState();
    const [entries, setEntries] = useState([]);
    const classes = useStyles();
    
    return (
        <div className='journal-page'>
            <Box className={classes.container}>
                <NoteContextProvider>
                    <JournalForm 
                    />
                    <JournalEntry
                        entries = {entries} 
                    />
                </NoteContextProvider>
            </Box>
        </div>
    );
    
    }

    export default Journal;