import React, { useContext } from 'react';
import { NoteContext } from '../../contexts/NoteContext';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

/*
*/
const JournalNotes = ({ note }) => {
    const { dispatch } = useContext(NoteContext);
    const classes = useStyles();
    return (
        <Box color='text.primary'>
          <Card className={classes.root}>
              <IconButton onClick={() => dispatch({type: 'DELETE_NOTE', id: note.id})} className={classes.margin} aria-label="delete">
                <DeleteIcon className={classes.button} />
                  <Typography
                  className={classes.date}>
                    {note.date}
                  </Typography>
              </IconButton>
          <Typography
          className={classes.note}>
            {note.note}
          </Typography>
        </Card>
        </Box>
    )
}

export default JournalNotes;