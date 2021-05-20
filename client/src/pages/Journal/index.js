import React, { useState, useEffect } from 'react';
import JournalEntry from '../../components/JournalEntries';
import JournalForm from '../../components/JournalForm';
import NoteContextProvider from '../../contexts/NoteContext';
import bgImage from '../../images/journal-bg.jpg'; 
import { Box } from '@material-ui/core';

import useStyles from './styles';


const Journal = () => {
    const [date, setDate] = useState();
    const [entries, setEntries] = useState([]);
    const classes = useStyles();
    
    return (
        <Box className={classes.container}>
            <NoteContextProvider>
                <JournalForm 
                />
                <JournalEntry
                entries = {entries} 
                />
            </NoteContextProvider>
        </Box>
    );
    
    }

    export default Journal;