import React, { useContext } from 'react';
import { NoteContext } from '../../contexts/NoteContext';
import JournalNotes from '../JournalNotes';

const JournalEntry = () => {
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
    <div className='noNotes'>
        <h1>You have no current notes.</h1>
    </div>
    )
}

export default JournalEntry;