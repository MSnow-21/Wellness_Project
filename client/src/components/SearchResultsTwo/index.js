import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./style.css";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});


function SearchResultsTwo(props){
    
    console.log(props.items)
    
    const getNutrients = (nutrients) => {
        const nutrientArray = []
        for (const nutrient in nutrients){
            nutrientArray.push([nutrient,nutrients[nutrient]])
        }
        return nutrientArray;

    }

    const classes = useStyles();

    return(
    <Card className={classes.root}>
        {props.items.map(({food},i) => (
        <div key={i}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={food.image}
            title="Contemplative Reptile"
            />    
            <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              {food.label}
          </Typography>
          {getNutrients(food.nutrients).map((nutrient,j) =>
          <Typography variant="body2" color="textSecondary" component="p" key={j}>
              {nutrient[0]+": "+nutrient[1].toString().slice(0,5)}    
          </Typography>
          )}
        </CardContent>
        </CardActionArea>
        </div>
        ))}
    

    </Card>
        
    );
}

export default SearchResultsTwo;