import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PortalDescription from './HomePage/PortalDescription';
import AutorsNav from './AutorsPage/AutorsNav';
import Autor from './AutorsPage/Autor';
import Architect from './ArchitectPage/Architect';
import SearchByArchitects from './Architectors/SearchByArchitects';
import { architects } from '../store';   
import { autors } from '../store';


function findAllName(obj, listCategory) {
    const names = [];
    
    obj.map((item, index) => {
        const configItem = { index };

        listCategory.forEach((category) => {
            configItem[category] = item[category];
        });

        names.push(configItem);
    });

    return names;
}

function createRoutrers(listLink, data, componentCb) {
    const routers = [];

    listLink.forEach((item) => {
        const props = data[item.index];
        
        routers.push(
            <Route exact
                key={item.url}
                path={`/${item.url}`}

                render={() => componentCb(props)}
            />
        )
    });

    return routers;
}

function GlobalNav() {
    const routers = [];

    const linksArchitects = findAllName(architects, ['url', 'name']);

    routers.push(...createRoutrers(
        linksArchitects,
        architects,
        (architect) => <Architect {...architect}/>
    ));

    const linksAutors = findAllName(autors, ['url', 'name', 'github']);
    routers.push(...createRoutrers(
        linksAutors,
        autors,
        (autor) => <Autor {...autor}/>
    ));

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
                render={() => <AutorsNav />}
            />
            <Route exact
                path="/architects"
                render={() => <SearchByArchitects />}
            />

            { routers }
        </Router>
    </>
}

export default GlobalNav;