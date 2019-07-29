import React from 'react';

import ArchitectOfTheDay from './ArchitectOfTheDay'

function PortalDescription({portalDescription, architects}) {
    const { title, description } = portalDescription;

    return <>
        <h1>{title}</h1>
        <p>{description}</p>
        <ArchitectOfTheDay portalDescription={portalDescription} architects={architects} />
    </>
}

export default PortalDescription;
