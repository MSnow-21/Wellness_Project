import { makeStyles } from '@material-ui/core/styles';
import Image from '../../images/journal-bg.jpg';
const useStyles = makeStyles((theme) => ({
    container: {
        padding: '200px 20px',
        backgroundImage: `url(${Image})`
    }
}));

export default useStyles;