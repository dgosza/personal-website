import React from 'react'

//Material UI Core
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 140,
    },
    title:{
        color: '#343a40' 
    }
});

const CustomersProjects = ({projectName, projectDescription, repositoryLink, projectOnFly, imageProject}) => {

    const classes = useStyles();
    
    return (
        <Card className={classes.root}>

            <CardMedia
                className={classes.media}
                image={imageProject}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.title}>{projectName}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">{projectDescription}</Typography>
            </CardContent>

            <CardActions>
                <Button size="small" color="primary" href={repositoryLink} target="_blank">github Repository</Button>
                <Button size="small" color="primary" href={projectOnFly} target="_blank">Project on fly</Button>
            </CardActions>
        </Card>
    )
}

export default CustomersProjects