import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Container, AppBar, Toolbar, Button } from '@material-ui/core';
import MediaQuery from 'react-responsive';
import ScrollToTop from 'react-router-scroll-top'
import {Helmet} from "react-helmet";

import styles from './GlobalNavStyles';
import PortalDescription from '../HomePage/PortalDescription';
import Developers from '../DevelopersPage/Developers';
import Architect from '../ArchitectPage/Architect';
import SearchByArchitects from '../ArchitectPage/SearchByArchitects';
import LanguageController from '../Language/LanguageController';
import MobileMenu from './MobileMenu';
import Footer from './Footer';

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
        anchorMenuEl: null,
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
            anchorEl: null,
            anchorMenuEl: null
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

    handleMainMenu = e => {
        this.setState({
            anchorMenuEl: e.currentTarget
        })
    }

    handleMainClose = () => {
        this.setState({
            anchorMenuEl: null
        })
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
                developers, portalDescription, architectPageLanguage, searchLabel, 
                SEO, architectOfTheDayButton,
            },
            anchorEl,
            anchorMenuEl,
        } = this.state;

        const linksArchitects = this.findAllName(architects, ['url', 'name']);
        routers.push(...this.createRouters(
            linksArchitects,
            architects,
            (architect) => <Architect {...architect} lang={architectPageLanguage} />
        ));

        const open = Boolean(anchorEl);
        const openMenu = Boolean(anchorMenuEl);

        return (
            <>
              <Helmet>
                <title>{`${SEO.title} - RSSchool2019Q1`}</title>
                <meta name="description" content={SEO.description} />
              </Helmet>
                <Router>
                    <AppBar position="sticky">
                        <Toolbar style={styles.menuBar}>
                            <MediaQuery query="(max-device-width: 600px)">
                                <MobileMenu
                                    handleMainMenu={this.handleMainMenu}
                                    anchorMenuEl={anchorMenuEl}
                                    openMenu={openMenu}
                                    handleMainClose={this.handleMainClose}
                                    handleClick={this.handleClick}
                                    homePageLink={homePageLink}
                                    architectsNav={architectsNav}
                                    developersList={developersList}
                                />
                            </MediaQuery>

                            <MediaQuery query="(min-device-width: 601px)">
                                <div style={styles.linkContainer}>
                                    <Button style={styles.linkBox}>
                                        <Link style={styles.link} to='/'>
                                            {homePageLink}
                                        </Link>
                                    </Button>
                                    <Button style={styles.linkBox}>
                                        <Link style={styles.link} to='/architects'>
                                            {architectsNav}
                                        </Link>
                                    </Button>
                                    <Button style={styles.linkBox}>
                                        <Link style={styles.link} to='/developers'>
                                            {developersList}
                                        </Link>
                                    </Button>
                                </div>
                            </MediaQuery>

                            <LanguageController
                                open={open}
                                anchorEl={anchorEl}
                                handleClose={this.handleClose}
                                handleMenu={this.handleMenu}
                                onClick={this.handleClick}
                            />
                        </Toolbar>
                    </AppBar>
                    <Container style={styles.wrapper} maxWidth="lg">
                        <Route exact
                            path={`/`}
                            render={() =>
                                <PortalDescription
                                  portalDescription={portalDescription}
                                  architects={architects}
                                  architectOfTheDayButton={architectOfTheDayButton}
                                />
                            }
                        />
                        <Route exact
                            path='/architects'
                            render={() => (
                                <SearchByArchitects
                                  architects={architects}
                                  searchPlaceholder={searchLabel}
                                />)}
                        />
                        <Route exact
                            path='/developers'
                            render={() => <Developers
                              developers={developers} 
                            />}
                        />
                        <ScrollToTop>
                          {routers}
                        </ScrollToTop>
                    </Container>
                    <Footer
                        devTitle={developersList}
                        developers={developers}
                    />
                </Router>
            </>
        )
    }
}

export default GlobalNav;
