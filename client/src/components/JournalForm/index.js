import React, { useContext, useState } from "react";
import { NoteContext } from '../../contexts/NoteContext';
// Imports for materialUI.
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import moment from 'moment';
import { Box, Container } from "@material-ui/core";
import useStyles from './styles';

const JournalForm = () => {
    const classes = useStyles();
    const { dispatch } = useContext(NoteContext);
    const [date, setDate] = useState('');
    const [note, setNote] = useState('');
    
    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch({type: 'ADD_NOTE', note: {
        date, note
      }});
      setDate('');
      setNote('');
    };

    return (
            <Box className='journal-form' textAlign='center'>
              <Container maxWidth='xs'>
                <form className=''>
                  <Paper component = "form" className = ''>
                  <IconButton 
                      className = ''
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