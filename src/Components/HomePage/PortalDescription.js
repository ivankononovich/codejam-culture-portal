import React from 'react';
import { Typography, CardMedia } from '@material-ui/core';
import ArchitectOfTheDay from './ArchitectOfTheDay';
import AboutArchitect from './AboutArchitect';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '1em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.2)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(26, 24, 58, .6)',
      outline: '1px solid #a4bcd1'
    },
  },
  h2: {
    marginTop: 25,
    textAlign: 'center',
    fontFamily: 'Georgia, sans-serif',
    fontStyle: 'italic',
    color: '#252674',
    textShadow: '1px 1px 2px black, 0 0 25px white, 0 0 5px #7289c8',
  },
  img: {
    height: 'auto',
    maxHeight: 400,
    width: 'auto',
    maxWidth: "100%",
    margin: '60px auto 40px auto',
    boxShadow: '0 2px 4px 0 black, 0 3px 15px 0 black',
    padding: 1,
    background: '#6768af',
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
