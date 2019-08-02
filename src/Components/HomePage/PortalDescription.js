import React from 'react';
import { Typography } from '@material-ui/core';
import ArchitectOfTheDay from './ArchitectOfTheDay';
import AboutArchitect from './AboutArchitect';

export default ({portalDescription, architects}) => {
    const { title, description } = portalDescription;

    return <>
        <Typography variant="h3" component="h1" gutterBottom align="center">
            {title}
        </Typography>
        <AboutArchitect 
          description={description}
        />
        <ArchitectOfTheDay portalDescription={portalDescription} architects={architects} />
    </>
}
