import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    notes: {
        paddingTop: '20px'
    },
    noNotes: {
        color: 'white',
        textAlign: 'center',
        paddingTop: '20px'
    }
}))

export default useStyles;