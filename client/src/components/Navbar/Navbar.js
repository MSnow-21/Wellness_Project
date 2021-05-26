import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import EcoIcon from '@material-ui/icons/Eco';
import { logoutUser } from '../../actions/authActions';
import { connect, useDispatch } from 'react-redux';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    flexGrow: 1
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    backgroundColor: '#2909AE',
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'black',
    opacity: '85%'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    color: '#2909AE',
    textAlign: 'center'
  },
  title: {
    flexGrow: 1
  },
  listItem: {
    color: '#2909AE',
    fontSize: '32px',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  logoutBttn: {
    color: 'white',
    fontSize: '20px',
    float: 'right',
    paddingRight: '3%',   
  }
}));



export default function PersistentDrawerLeft() {
  const dispatch = useDispatch();
  let history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onLogout = event => {
    console.log("in onlogout");

    dispatch(logoutUser());

    history.push('/');
    window.location.reload();
}

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            Well Rounded Fitness
          </Typography>
          <Button onClick={onLogout} className={classes.logoutBttn} color=''>Log Out</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography variant='h5' style={{color: 'white', paddingTop: theme.spacing(1)}}>Explore Your Wellness!</Typography>
          <IconButton style={{ color: 'white' }} onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem className={classes.listItem}>
            <HomeIcon fontSize='large' />
            <Link to='/' className='nav-link'>Home</Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <EcoIcon fontSize='large' />
            <Link to='/nutrition' className='nav-link'>Nutrition</Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <FitnessCenterIcon fontSize='large' />
            <Link to='/fitness' className='nav-link'>Fitness</Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <EqualizerIcon fontSize='large' />
            <Link to='/stats' className='nav-link'>Statistics</Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <MenuBookIcon fontSize='large' />
            <Link to='/journal' className='nav-link'>Journal</Link>
          </ListItem>
        </List>

        <Divider />
      </Drawer>
    </div>
  );
}