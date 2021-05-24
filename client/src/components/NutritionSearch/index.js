import React from "react";
import IndexPageOne from "../SearchIndexOne";
import IndexPageTwo from "../SearchIndexTwo";
import IndexPageThree from "../SearchIndexThree";
import NutritionStart from "../NutritionStart";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./style.css";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
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
    };

    return(
        <div className={classes.root}>
        <div className="row">
            <div className="col-lg-12">
                <NutritionStart/>
                </div>
                <div className="col-xl-1">

                </div>
                <div className="col-xl-8">
                    <IndexPageThree/>
                    <IndexPageOne/>
                </div>
                <div className="col-xl-3">
            </div>
            <div className="col-lg-10">
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
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
                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
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
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
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
            <Typography>
                <IndexPageTwo/>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.heading}>Personal data</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
              vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      </div>
       </div>

    )
}

export default NutritionBegin;