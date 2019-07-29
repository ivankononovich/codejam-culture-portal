import React from 'react';
import { Container, Typography, Button, Card, CardActionArea, CardActions, CardContent, CardMedia} from '@material-ui/core';
import useStyles from './makeStyles';

function Developers(props) {

  const classes = useStyles();

  return <>
    <Container className={classes.container}>
      {props.developers.map((item, index) => {
        return (
         <Card key={item.id} className={classes.card}>
           <CardActionArea>
             <CardMedia
              className={classes.img}
              component="img"
              alt="Developer"
              image={item.image}
              title={item.name}
             />
             <CardContent>
               <Typography className={classes.name} gutterBottom variant="h5" component="h2">
                 {item.name}
               </Typography>
               <Typography className={classes.contribution} variant="body2" color="textSecondary" component="p">
                 {item.contribution}
               </Typography>
             </CardContent>
           </CardActionArea>
           <CardActions className={classes.actions}>
             <Button className={classes.button} variant="outlined" color="primary" href={item.github} target='_blank'>
               github
             </Button>
           </CardActions>
         </Card>
        );
      })}
    </Container>
  </>
}

export default Developers;
