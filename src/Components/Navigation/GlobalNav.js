import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PortalDescription from '../HomePage/PortalDescription';
import DevelopersNav from './DevelopersNav';
import Developer from '../DevelopersPage/Developer';
import Architect from '../ArchitectPage/Architect';
import SearchByArchitects from '../ArchitectPage/SearchByArchitects';

import storeRU  from '../../store/storeRU';

// it will be used later
// import storeBY  from '../store/storeBY';
// import storeEN  from '../store/storeEN';


class GlobalNav extends Component {
    state = {
        language: 'RU',
        architects: storeRU.architects,
        developers: storeRU.developers,
        architectsNav: storeRU.architectsNav,
        developersNav: storeRU.developersNav,
        homePageLink: storeRU.homePageLink,
    };

    findAllName(obj, listCategory) {
        const names = [];

        obj.forEach((item, index) => {
            const configItem = { index };

            listCategory.forEach((category) => {
                configItem[category] = item[category];
            });

            names.push(configItem);
        });

        return names;
    }

    createRouters(listLink, data, componentCb) {
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

    render() {
        const routers = [];

        const linksArchitects = this.findAllName(this.state.architects, ['url', 'name']);
        routers.push(...this.createRouters(
            linksArchitects,
            this.state.architects,
            (architect) => <Architect {...architect}/>
        ));

        const linksDevelopers = this.findAllName(this.state.developers, ['url', 'name', 'github']);
        routers.push(...this.createRouters(
            linksDevelopers,
            this.state.developers,
            (developer) => <Developer {...developer}/>
        ));

        return <>
            <Router>
                <ul>
                    <li><Link to="/">{this.state.homePageLink}</Link></li>
                    <li><Link to="/developers">{this.state.developersNav}</Link></li>
                    <li><Link to="/architects">{this.state.architectsNav}</Link></li>
                </ul>

                <Route exact
                    path="/"
                    render={() => <PortalDescription />}
                />
                <Route exact
                    path="/developers"
                    render={() => <DevelopersNav developers={this.state.developers}/>}
                />
                <Route exact
                    path="/architects"
                    render={() => <SearchByArchitects architects={this.state.architects}/>}
                />

                { routers }
            </Router>
        </>
    }
}

export default GlobalNav;
