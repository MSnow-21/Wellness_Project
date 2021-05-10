import React, { useContext } from 'react';
import { NoteContext } from '../../contexts/NoteContext';
import JournalNotes from '../JournalNotes';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        color: 'white',
        paddingTop: '50px'
    }
})

const JournalEntry = () => {
    const classes = useStyles();
    const { notes } = useContext(NoteContext)
    console.log({ notes })
    return notes.length ? (
        <div className='notes'>
            <ul className='row'>
                { notes.map(note => {
                    return (
                        <JournalNotes note={note} key={note.id} />
                    )
                })}
            </ul>
        </div>
    ) : (
    <div className={classes.root}>
        <h1 className='no-notes'>You have no current notes.</h1>
        <MoodBadIcon style={{ 
            fontSize: 300,
         }} />
    </div>
    )
}

export default JournalEntry;