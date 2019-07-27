import React from 'react';
import { Link } from "react-router-dom";

import { architects } from '../../store';   

function findAllName() {
    const names = [];

    architects.forEach((item, index) => {
        names.push({
            url: item.id,
            name: item.name,
            index
        });
    });

    return names;
}

function createNav() {
    const links = findAllName();
    const nav = [];

    links.forEach((item, index) => {
        nav.push(<li key={index} data-index={index}>
            <Link to={`/${item.url}`}>{item.name}</Link>
        </li>)
    });

    return nav;
}

function ArchitectNav() {
    return <>
        <ul>
            {createNav()}
        </ul>
    </>
}

export default ArchitectNav;