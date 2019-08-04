import React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    margin: '70px auto 35px auto',
    maxWidth: '90%',
  },
  header: {
    marginBottom: 15,
    fontFamily: 'Georgia, sans-serif',
    fontStyle: 'italic',
    color: '#22236a',
    textShadow: '1px 1px 2px black, 0 0 25px white, 0 0 5px #7289c8',
    textAlign: 'center',
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
    background: '#92A9E6',
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
    maxHeight: 250,
    borderRadius: '15px',
    margin: 5,
    contain: 'content',
  },
  link: {
    cursor: 'pointer',
    color: '#e0f2f0',
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
  architectCard: {
    background: '#92A9E6',
  },
  architectName: {
    fontFamily: 'Georgia, sans-serif',
    color: '#252674',
    fontWeight: 'bold',
  },
  architectContent: {
    fontFamily: 'Georgia, sans-serif',
    fontStyle: 'italic',
    textAlign: 'justify',
    fontWeight: 'bold',
  },

  cardLeftPart: {
    background: '#92a9e6',
  }

}));

const getArchitectOfTheDay = architects => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const allDates = [];

  architects.forEach(architect => {
    const bornDate = architect.bornDate.slice(0, -4).concat(currentYear);

    const dateToCompare = new Date(bornDate);
    allDates.push(dateToCompare);
  });

  const dateDifferences = allDates.map(dateToCompare =>
    currentDate.getTime() - dateToCompare.getTime()
  );

  const closestDate = [...dateDifferences];

  const targetDate = closestDate
    .filter(date =>
      date >= 0
    )
    .sort(
      (a, b) => b - a
    )
    .pop();

  const indexOfArchitect = dateDifferences.indexOf(targetDate);

  return architects[indexOfArchitect];
};

const ArchitectOfTheDay = props => {
  const { portalDescription: { architectOfTheDay }, architectOfTheDayButton, architects } = props;
  const classes = useStyles();
  const architect = getArchitectOfTheDay(architects);
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

          <CardContent className={classes.architectCard}>
            <Typography  className={classes.architectName} component="h5" variant="h5">
              {name}
            </Typography>
            <Typography className={classes.architectContent} variant="subtitle1" color="textSecondary">
              {born} - {deceased}
            </Typography>
            <Typography className={classes.architectContent}>
              {description}
            </Typography>
          </CardContent>

          <CardActions className={classes.cardActionsMobile}>
            <Link
              className={classes.link}
              to={`/${url}`}
            >
              <Button variant="contained" size="medium" color="primary">
                {architectOfTheDayButton}
              </Button>
            </Link>
          </CardActions>
        </Card>
      </MediaQuery>


      <MediaQuery query="(min-device-width: 570px)">
        <Card className={classes.card}>
          <div className={classes.cardLeftPart} style={{ minWidth: 240 }}>
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
                <Button variant="contained" size="medium" color="primary">
                  {architectOfTheDayButton}
                </Button>
              </Link>
            </CardActions>
          </div>

          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography  className={classes.architectName} component="h5" variant="h5">
                {name}
              </Typography>
              <Typography className={classes.architectContent} variant="subtitle1" color="textSecondary">
                {born} - {deceased}
              </Typography>
              <Typography className={classes.architectContent}>
                {description}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </MediaQuery>

    </section>
  );
};

export default ArchitectOfTheDay;
