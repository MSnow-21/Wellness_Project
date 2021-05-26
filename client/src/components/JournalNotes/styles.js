import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
        height:300,
        margin: 12,
        opacity:0.8,
        backgroundColor: 'teal'
      },
      date: {
        margin: 'auto',
        fontSize: 26,
        color: 'white'
      },
      button: {
        color: 'white',
        fontSize: 38
      },
      note: {
        color: 'white',
        fontSize: 16,
        padding: '10px 20px'
      }
}))

export default useStyles;