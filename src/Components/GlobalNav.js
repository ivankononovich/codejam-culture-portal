import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PortalDescription from './HomePage/PortalDescription';
import AutorsNav from './AutorsPage/AutorsNav';
import Autor from './AutorsPage/Autor';
import Architect from './ArchitectPage/Architect';
import SearchByArchitects from './Architectors/SearchByArchitects';

import storeRU  from '../store/storeRU'; 

// it will be used later
// import storeBY  from '../store/storeBY';   
// import storeEN  from '../store/storeEN';   


class GlobalNav extends Component {
    state = {
        language: 'RU',
        architects: storeRU.architects,
        autors: storeRU.autors,
        architectsNav: storeRU.architectsNav,
        autorsNav: storeRU.autorsNav,
        homePageLink: storeRU.homePageLink,
    }

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

    createRoutrers(listLink, data, componentCb) {
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

        routers.push(...this.createRoutrers(
            linksArchitects,
            this.state.architects,
            (architect) => <Architect {...architect}/>
        ));

        const linksAutors = this.findAllName(this.state.autors, ['url', 'name', 'github']);
        routers.push(...this.createRoutrers(
            linksAutors,
            this.state.autors,
            (autor) => <Autor {...autor}/>
        ));

        return <>
            <Router>
                <ul>
                    <li><Link to="/">{this.state.homePageLink}</Link></li>
                    <li><Link to="/autors">{this.state.autorsNav}</Link></li>
                    <li><Link to="/architects">{this.state.architectsNav}</Link></li>
                </ul>

                <Route 
                    exact 
                    path="/"
                    render={() => <PortalDescription />}
                />
                <Route exact
                    path="/autors"
                    render={() => <AutorsNav autors={this.state.autors}/>}
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