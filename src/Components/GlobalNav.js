import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PortalDescription from './HomePage/PortalDescription';
import Autors from './AutorsPage/Autors';
import Architect from './Architectors/Architect';
import SearchByArchitects from './Architectors/SearchByArchitects';
import { architects } from '../store';   


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

function createRouter() {
    const links = findAllName();
    const routers = [];

    links.forEach((item) => {
        const architect = architects[item.index];
        
        routers.push(
            <Route exact
                key={item.url}
                path={`/${item.url}`}

                render={() => <Architect {...architect}/>}
            />
        )
    });

    return routers;
}

function GlobalNav() {
    return <>
        <Router>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/autors">autors</Link></li>
                <li><Link to="/architects">architects</Link></li>
            </ul>

            <Route 
                exact 
                path="/"
                render={() => <PortalDescription />}
            />
            <Route exact
                path="/autors"
                render={() => <Autors />}
            />
            <Route exact
                path="/architects"
                render={() => <SearchByArchitects />}
            />

            { createRouter() }
        </Router>
    </>
}

export default GlobalNav;