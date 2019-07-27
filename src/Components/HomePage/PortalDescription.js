import React from 'react';

function PortalDescription(props) {
    return <>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </>
}

export default PortalDescription;
