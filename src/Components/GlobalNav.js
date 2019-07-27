import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PortalDescription from './HomePage/PortalDescription';
import Autors from './AutorsPage/Autors';
import ArchitectNav from './Architectors/ArchitectNav';

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
            <Route 
                path="/autors"
                render={() => <Autors />}
            />
            <Route 
                path="/architects"
                render={() => <ArchitectNav />}
            />
        </Router>
    </>
}

export default GlobalNav;