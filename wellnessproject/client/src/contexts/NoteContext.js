import React, {createContext, useState } from 'react'
import uuid from 'react-uuid';
import Moment from 'moment';

const getDate = () => {
    let currentDate = Moment().format('MMM Do YYYY H:mma');
    console.log(currentDate)
}

export const NoteContext = createContext();

const NoteContextProvider = (props) => {
    const [notes, setNotes] = useState([
        {date: 'September 21st 1999 11:42am', note: 'This was the day I was born.', id: 1},
        {date: 'July 2nd 1997 3:42pm', note: 'This was the day my sister was born.', id: 2}
    ]);

    const addNote = (date, note) => {
        setNotes([...notes, {date, note, id: uuid() }])
    }
    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote }}>
            { props.children }
        </NoteContext.Provider>
    )
}

export default NoteContextProvider; 