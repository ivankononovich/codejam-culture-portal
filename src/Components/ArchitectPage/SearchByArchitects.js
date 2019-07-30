import React, { Component } from 'react';
import { TextField, Container } from '@material-ui/core';
import ArchitectNav from '../Navigation/ArchitectNav';

class SearchByArchitects extends Component {
    state = {
        searchResults: this.props.architects,
    }

    componentDidUpdate(prevProps) {
        if (prevProps.searchPlaceholder !== this.props.searchPlaceholder) {
            this.setState({
                searchResults: this.props.architects,
            });
        }
    }

    findArchitects(searchText) {
        const matches = [];
        const regExp = new RegExp(searchText, 'gi');

        this.props.architects.forEach((item) => {
            const criteria = [
                item.name,
                item.placeOfBirth,
                item.placeOfResidence,
            ];
            let fit = false;

            criteria.forEach((text) => {
                if (text.search(regExp) >= 0) {
                    fit = true;
                }
            });

            if (fit) {
                matches.push(item);
            }
        });

        return matches;
    }

    handleSearch(value) {
        if (value !== '') {
            const searchResults = this.findArchitects(value);
            this.setState({
                searchResults,
            });
        } else {
            this.setState({
                searchResults: this.props.architects,
            });
        }
    }

    render() {
        return <>
            <Container maxWidth="lg">
                <form noValidate autoComplete="off">
                    <TextField
                        id="outlined-full-width"
                        label='search'
                        placeholder={this.props.searchPlaceholder}
                        fullWidth
                        onChange={(ev) => this.handleSearch(ev.target.value)}
                        margin="normal"
                        variant="outlined"
                    />
                </form>
                <ArchitectNav links={this.state.searchResults} />
            </Container>
        </>
    }
}

export default SearchByArchitects;
