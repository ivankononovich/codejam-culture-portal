import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from '@material-ui/core';

import styles from './GlobalNavStyles';
import PortalDescription from '../HomePage/PortalDescription';
import Developers from '../DevelopersPage/Developers';
import Architect from '../ArchitectPage/Architect';
import SearchByArchitects from '../ArchitectPage/SearchByArchitects';
import LanguageController from '../Language/LanguageController';

import storeRU from '../../store/storeRU';
import storeBY from '../../store/storeBY';
import storeEN from '../../store/storeEN';

class GlobalNav extends Component {
    state = {
        allDataLanguage: [
            {
                name: 'ru',
                data: storeRU,
            },
            {
                name: 'by',
                data: storeBY,
            },
            {
                name: 'en',
                data: storeEN,
            },
        ],
        language: 'ru',
        activeStore: storeRU,
        anchorEl: null,
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

        listLink.forEach((item, index) => {
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

    handleClick = (event) => {
        const { target } = event;
        const { language } = target.dataset;

        if (this.state.language !== language) {
            this.dataSearchForActiveLanguage(language);
        }

        this.setState({
            anchorEl: null
        })
    }

    dataSearchForActiveLanguage(newLanguage) {
        const data = this.state.allDataLanguage;

        data.forEach((item) => {
            if (item.name === newLanguage) {
                const newStore = item.data;

                this.setState({
                    activeStore: newStore,
                    language: newLanguage,
                });
            }
        });
    }

    handleMenu = e => {
        this.setState({
            anchorEl: e.currentTarget
        })
    }

    handleClose = () => {
        this.setState({
            anchorEl: null
        })
    }

    render() {
        const routers = [];
        const {
            activeStore: {
                architects, developersList, architectsNav, homePageLink,
                developers, portalDescription, architectPageLanguage
            },
            anchorEl
        } = this.state;

        const linksArchitects = this.findAllName(architects, ['url', 'name']);
        routers.push(...this.createRouters(
            linksArchitects,
            architects,
            (architect) => <Architect {...architect} lang={architectPageLanguage}/>
        ));

        const open = Boolean(anchorEl);

        return (
            <>
            <Router>
                <AppBar position="static">
                    <Toolbar style={styles.menuBar}>
                        <div style={styles.linkContainer}>
                            <Button style={styles.linkBox} variant="body1" >
                                <Link style={styles.link} to="/">{homePageLink}</Link>
                            </Button>
                            <Button style={styles.linkBox} variant="body1" >
                                <Link style={styles.link} to="/architects">{architectsNav}</Link>
                            </Button>
                            <Button style={styles.linkBox} variant="body1" >
                                <Link style={styles.link} to="/developers">{developersList}</Link>
                            </Button>
                        </div>

                        <LanguageController 
                            open={open}
                            anchorEl={anchorEl}
                            handleClose={this.handleClose} 
                            handleMenu={this.handleMenu} 
                            onClick={this.handleClick} 
                        />
                    </Toolbar>
                </AppBar>

                <Route exact
                    path="/"
                    render={() =>
                        <PortalDescription
                            portalDescription={portalDescription}
                            architects={architects}
                            developers={developers}
                            devTitle={developersList}
                        />
                    }
                />
                <Route exact
                    path="/developers"
                    render={() => <Developers developers={developers} />}
                />
                <Route exact
                    path="/architects"
                    render={() => (
                        <SearchByArchitects
                            architects={this.state.activeStore.architects}
                            searchPlaceholder={this.state.activeStore.searchLabel}
                        />
                    )}
                />
                {routers}
            </Router>
            </>
        )
      }
}

export default GlobalNav;
