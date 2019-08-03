import React from 'react';
import { Typography, CardMedia } from '@material-ui/core';
import ArchitectOfTheDay from './ArchitectOfTheDay';
import AboutArchitect from './AboutArchitect';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  h2: {
    marginTop: 25,
    textAlign: 'center',
  },
  img: {
    height: 'auto',
    maxHeight: 400,
    width: 'auto',
    maxWidth: "100%",
    margin: '40px auto',
  },
}));


export default ({portalDescription, architects, architectOfTheDayButton}) => {
  const { title, description, img } = portalDescription;
  const classes = useStyles();

  return <>
    <Typography className={classes.h2} variant="h3" component="h2" gutterBottom align="center">{title}</Typography>
    <CardMedia className={classes.img} component="img" image={img} alt="Photo" />
    <AboutArchitect description={description} />
    <ArchitectOfTheDay
      portalDescription={portalDescription}
      architects={architects}
      architectOfTheDayButton={architectOfTheDayButton}
    />
  </>
}
