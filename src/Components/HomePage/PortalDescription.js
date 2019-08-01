import React from 'react';
import { Container, Typography } from '@material-ui/core';
import ArchitectOfTheDay from './ArchitectOfTheDay';
// import Footer from './Footer';

export default ({portalDescription, architects}) => {
    const { title, description } = portalDescription;

    return <>
        <Container maxWidth="lg" style={{marginTop: '1rem'}}>
            <Typography variant="h3" component="h1" gutterBottom align="center">
                {title}
            </Typography>
            <Typography variant="h5" component="p" gutterBottom align="center">
                {description}
            </Typography>
            <ArchitectOfTheDay portalDescription={portalDescription} architects={architects} />
        </Container>
    </>
}
