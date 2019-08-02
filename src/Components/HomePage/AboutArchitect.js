import React from 'react';
import { Container, Popover, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    appBar: {
      position: "relative",
      top: 'auto',
      bottom: 0,
      flexShrink: 0,
    },
    container: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    wrapper: {
      padding: '0.5rem',
    },
    list: {
      cursor: 'pointer',
    },
    avatar: {
      margin: '0 auto',
    },
  });

export default (props) => {
  const { description } = props;
  return (
  <>
    <Container maxWidth="lg">
      <Typography 
        variant="h5"
        component="p"
        gutterBottom
        align="justify"
        dangerouslySetInnerHTML={{__html:description}}
      />
    </Container>
  </>
  )
}
