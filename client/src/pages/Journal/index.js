import React, { useState, useEffect } from 'react';
import JournalEntry from '../../components/JournalEntries';
import JournalForm from '../../components/JournalForm';
import NoteContextProvider from '../../contexts/NoteContext';
import { makeStyles } from '@material-ui/core/styles';
import bgImage from '../../images/journal-bg.jpg'; 
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 1,
      borderRadius: 1,
      color: 'white',
    },
    paperContainer: {
        backgroundImage: `url(${bgImage})`,
        minHeight: 768,
        minWidth: 640,
        paddingBottom: '100px',
        textAlign: 'center'
    }
  });

const Journal = () => {
    const [date, setDate] = useState();
    const [entries, setEntries] = useState([]);
    const classes = useStyles();
    
    return (
        <Box className={classes.paperContainer}>
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