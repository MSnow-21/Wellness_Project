import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));

const JournalForm = ({ onSubmit, onChange }) => {
    const classes = useStyles();
    return (
        <div className='row'>
            <div className='col-md-3'></div>
            <div className='col-md-6 journal-form'>
                <Paper component="form" className={classes.root}>
                    <InputBase
                        onChange = {onChange}
                        className={classes.input}
                        placeholder="Whats On Your Mind?"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <Divider className={classes.divider} orientation="vertical" />
                    <IconButton onClick={onSubmit} className={classes.iconButton} aria-label="directions">
                        <NoteAddIcon />
                    </IconButton>
                </Paper>
            </div>
        </div>
    )
}



export default JournalForm;