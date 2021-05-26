import React, { useContext, useState } from "react";
import { NoteContext } from '../../contexts/NoteContext';
// Imports for materialUI.
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import moment from 'moment';
import { Box, Container } from "@material-ui/core";

const JournalForm = () => {
    const { dispatch } = useContext(NoteContext);
    const [date, setDate] = useState('');
    const [note, setNote] = useState('');
    
    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch({type: 'ADD_NOTE', note: {
        date, note
      }})
    };

    return (
            <Box className='journal-form' textAlign='center'>
              <Container maxWidth='xs'>
                <form>
                  <Paper component = "form" className = ''>
                  <IconButton 
                      type='reset'
                      aria-label = "directions"
                      onClick={handleSubmit}
                    >
                      <NoteAddIcon />
                    </IconButton>
                    <InputBase
                      onChange = {(e) => {
                        setDate(moment().format('MMM/Do/h:mm:a'));
                        setNote(e.target.value);
                      }}
                      required
                      type = 'text'
                      className = ''
                      placeholder = "Whats On Your Mind?"
                      inputProps = {{ 'aria-label': 'search google maps' }}
                      multiline= 'true'
                    />
                  </Paper>
                </form>
              </Container>
            </Box>
    )
}



export default JournalForm;