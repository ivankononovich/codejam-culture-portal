import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Link, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';

export default (props) => {
    const architects = props.links;
    const architectsSorted = architects.sort((a, b) => {return a.name > b.name ? 1 : -1} );
    return (
    <>
        <Container maxWidth="lg">
            <List>
            {architectsSorted.map((architector, i) =>
                <ListItem
                    key={i}
                >
                    <ListItemAvatar>
                        <Avatar
                            alt={architector.name}
                            src={architector.image}
                        />
                    </ListItemAvatar>
                    <Link
                        component={RouterLink}
                        to={`/${architector.url}`}
                        underline="hover"
                    >
                        <ListItemText
                            primary={architector.name}
                        />
                    </Link>
                </ListItem>
            )}
            </List>
        </Container>
    </>
    )
}
