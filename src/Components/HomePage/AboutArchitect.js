import React from 'react';
import { Container, Typography } from '@material-ui/core';

export default (props) => {
  const { description } = props;
  return (
  <>
    <Container maxWidth="lg">
      <Typography
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
