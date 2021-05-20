import React, { useContext } from 'react';
import { NoteContext } from '../../contexts/NoteContext';
import JournalNotes from '../JournalNotes';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import { Container, Grid } from '@material-ui/core';
import useStyles from './styles';

const JournalEntry = () => {
    const classes = useStyles();
    const { notes } = useContext(NoteContext)
    console.log({ notes })
    return notes.length ? (
        <Container className={classes.notes}>
            <Grid container spacing={2} justify='center'>
                { notes.map(note => {
                    return (
                        <Grid item key={note} >
                            <JournalNotes note={note} key={note.id} />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    ) : (
    <div className={classes.noNotes}>
        <h1>You have no current notes.</h1>
        <MoodBadIcon style={{ 
            fontSize: 300,
         }} />
    </div>
    )
}

export default JournalEntry;