import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Link, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';

export default (props) => {
    const architects = props.links;
    return (
    <>
        <Container maxWidth="lg">
            <List>
            {architects.map((architector, i) =>
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
