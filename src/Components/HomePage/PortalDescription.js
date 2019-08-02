import React from 'react';
import { Typography } from '@material-ui/core';
import ArchitectOfTheDay from './ArchitectOfTheDay';

export default ({portalDescription, architects}) => {
  const {title, description } = portalDescription;
  return <>
    <Typography variant="h3" component="h1" gutterBottom align="center">
      {title}
    </Typography>
    <Typography variant="h5" component="p" gutterBottom align="center">
      {description}
    </Typography>
    <ArchitectOfTheDay portalDescription={portalDescription} architects={architects} />
  </>
}
