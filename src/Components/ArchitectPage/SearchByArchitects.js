import React, { Component } from 'react';
import { TextField, Container } from '@material-ui/core';
import ArchitectNav from '../Navigation/ArchitectNav';

class SearchByArchitects extends Component {
    inputRef = React.createRef();

    state = {
        searchResults: this.props.architects,
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            console.log('differ');
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
        const searchResults = this.findArchitects(value);
        if (value !== '') {
            this.setState({
                searchResults,
            });
        } else {
            this.setState({
                searchResults: this.props.architects,
            });
        }
    }

    componentWillReceiveProps(props) {
        this.inputRef.current.value = '';

        this.setState({
            searchResults: props.architects,
        });
    }

    render() {
        return <>
            <Container maxWidth="lg">
                <form noValidate autoComplete="off">
                    <TextField
                        id="outlined-full-width"
                        label="Name, place or project"
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
