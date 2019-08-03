import React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@material-ui/core';

import GetArchitectOfTheDay from './GetArchitectOfTheDay';

const useStyles = makeStyles(theme => ({
  container: {
    margin: '70px auto 35px auto',
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
  },
  link: {
    cursor: 'pointer',
    color: '#3F51B5',
    textDecoration: 'none',
  },
  cardActionsMobile: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 15,
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px 0',
  },
}));

const ArchitectOfTheDay = props => {
  const { portalDescription: { architectOfTheDay }, architectOfTheDayButton, architects } = props;
  const classes = useStyles();
  const architect = GetArchitectOfTheDay(architects);
  const { url, name, born, deceased, description, image } = architect;


  return (
    <section className={classes.container}>
      <Typography className={classes.header} variant="h4">{architectOfTheDay}</Typography>


      <MediaQuery query="(max-device-width: 569px)">
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

          <CardActions className={classes.cardActionsMobile}>
            <Link
              className={classes.link}
              to={`/${url}`}
            >
              <Button variant="outlined" size="medium" color="primary">
                {architectOfTheDayButton}
              </Button>
            </Link>
          </CardActions>
        </Card>
      </MediaQuery>


      <MediaQuery query="(min-device-width: 570px)">
        <Card className={classes.card}>
          <div style={{ minWidth: 240 }}>
            <CardMedia
              className={classes.architectImage}
              component="img"
              alt={name}
              src={image}
              title={name}
            />

            <CardActions className={classes.cardActions}>
              <Link
                className={classes.link}
                to={`/${url}`}
              >
                <Button variant="outlined" size="medium" color="primary">
                  {architectOfTheDayButton}
                </Button>
              </Link>
            </CardActions>
          </div>

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
