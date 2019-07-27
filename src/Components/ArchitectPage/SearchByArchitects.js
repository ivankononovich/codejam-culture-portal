import React, { Component } from 'react';

import ArchitectNav from '../Navigation/ArchitectNav';

class SearchByArchitects extends Component {
    inputRef = React.createRef();

    state = {
        searchResults: this.props.architects,
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

    handleChange(event) {
        const searchText = event.target.value;
        const searchResults = this.findArchitects(searchText);

        this.setState({
            searchResults,
        });
    }

    componentWillReceiveProps(props) {
        this.inputRef.current.value = '';

        this.setState({
            searchResults: props.architects,
        });
    }

    render() {
        
        return <>
            <input 
                ref={this.inputRef}
                onChange={(event) => this.handleChange(event)} 
                type="text"
            />
            
            <ArchitectNav links={this.state.searchResults} />
        </>
    }
}

export default SearchByArchitects;
