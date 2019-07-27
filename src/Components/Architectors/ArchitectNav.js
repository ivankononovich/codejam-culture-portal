import React from 'react';
import { Route, Link } from "react-router-dom";

import { architects } from '../../store';   
import Architect from './Architect';

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
            <Link to={`/architects/${item.url}`}>{item.name}</Link>
        </li>)
    });

    return nav;
}

function createRouter() {
    const links = findAllName();
    const routers = [];

    links.forEach((item) => {
        const architect = architects[item.index];
        
        routers.push(
            <Route 
                key={item.url}
                path={`/architects/${item.url}`}

                render={() => <Architect {...architect}/>}
            />
        )
    });

    return routers;
}

function ArchitectNav() {
    return <>
        <ul>
            {createNav()}
            {createRouter()}
        </ul>
    </>
}

export default ArchitectNav;