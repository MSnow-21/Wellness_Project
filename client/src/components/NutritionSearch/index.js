import React from "react";
import IndexPageOne from "../SearchIndexOne";
import IndexPageTwo from "../SearchIndexTwo";
import IndexPageThree from "../SearchIndexThree";
import NutritionStart from "../NutritionStart";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./style.css";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(25),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    accordion: {
      marginBottom: theme.spacing(3),
      padding: theme.spacing(3)
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
}));

function NutritionBegin(){
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    }

    return (
      <div className='nutrition-page'>
        <div className={classes.root}>
          <div className="col-lg-12 nutritionheadline">
            <NutritionStart/>
          </div>
          <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="lg">
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.accordion}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                <Typography className={classes.heading}>Nutritionix</Typography>
                <Typography className={classes.secondaryHeading}>Click to view Nutritionix Database</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <IndexPageThree/>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={classes.accordion}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                >
                <Typography className={classes.heading}>USDA Database</Typography>
                <Typography className={classes.secondaryHeading}>
                  Click to view the USDA Nutrition Database
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <IndexPageOne/>
                </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className={classes.accordion}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                >
                <Typography className={classes.heading}>Edaman Search</Typography>
                <Typography className={classes.secondaryHeading}>
                  Click to view the Edaman food search
                </Typography>
                </AccordionSummary>
              <AccordionDetails>
                <Typography className="row">
                  <IndexPageTwo/>
                </Typography>
              </AccordionDetails>
              </Accordion>
            </Container>
          </React.Fragment>
        </div>
      </div>
    )
}

export default NutritionBegin;