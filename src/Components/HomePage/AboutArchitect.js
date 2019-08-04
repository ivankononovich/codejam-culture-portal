import React from 'react';
import {Container, makeStyles, Typography} from '@material-ui/core';


const useStyles = makeStyles({
  description: {
    fontFamily: 'Georgia, sans-serif',
    fontStyle: 'italic',
    color: '#080735',
    textIndent: '5%',
  }
});

export default (props) => {
  const { description } = props;
  const classes = useStyles();
  return (
  <>
    <Container maxWidth="lg">
      <Typography className={classes.description}
        variant="h6"
        component="p"
        gutterBottom
        align="justify"
        dangerouslySetInnerHTML={{__html:description}}
      />
    </Container>
  </>
  )
}
