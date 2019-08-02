import React from 'react';
import MediaQuery from 'react-responsive';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

import GetArchitectOfTheDay from './GetArchitectOfTheDay';

const useStyles = makeStyles(theme => ({
  container: {
    margin: '0 auto',
    maxWidth: '90%',
  },
  header: {
    marginBottom: 15,
  },
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  architectImage: {
    maxWidth: 800,
    maxHeight: 300
  }
}));

const ArchitectOfTheDay = props => {
  const { portalDescription: { architectOfTheDay }, architects } = props;
  const classes = useStyles();
  const architect = GetArchitectOfTheDay(architects);
  const { name, born, deceased, description, image } = architect;


  return (
    <section className={classes.container}>
      <Typography className={classes.header} variant="h4">{architectOfTheDay}</Typography>


      <MediaQuery query="(max-device-width: 460px)">
        <Card>
          <CardMedia
            className={classes.architectImage}
            component="img"
            alt={name}
            src={image}
            title={name}
          />
          
          <CardContent>
            <Typography component="h5" variant="h5">
              {name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {born} - {deceased}
            </Typography>
            <Typography>
              {description}
            </Typography>
          </CardContent>
        </Card>
      </MediaQuery>


      <MediaQuery query="(min-device-width: 461px)">
        <Card className={classes.card}>
          <CardMedia
            className={classes.architectImage}
            component="img"
            alt={name}
            src={image}
            title={name}
          />

          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {born} - {deceased}
              </Typography>
              <Typography>
                {description}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </MediaQuery>

    </section>
  );
}

export default ArchitectOfTheDay;
