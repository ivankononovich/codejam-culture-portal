import React from 'react';

function Architect(props) {
    return <> 
        <h2>{props.name}</h2>
        <span>Годы жизни {props.born} - {props.deceased}</span>
        <p>{props.description}</p>
    </>
}

export default Architect;