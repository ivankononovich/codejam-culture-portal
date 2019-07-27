import React from 'react';
import { Link } from "react-router-dom";

function createNav(props) {
    const nav = [];

    props.links.forEach((item, index) => {
        nav.push(<li key={index} data-index={index}>
            <Link to={`/${item.id}`}>{item.name}</Link>
        </li>)
    });

    return nav;
}

function ArchitectNav(props) {
    return <>
        <ul>
            {createNav(props)}
        </ul>
    </>
}

export default ArchitectNav;
