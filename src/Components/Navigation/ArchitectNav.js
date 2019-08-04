import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Link, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    item: {
        fontSize: '2.1vw',
        fontFamily: 'FANTASY',
    },
  listItem: {
        paddingLeft: "25%",
  },
});

export default (props) => {
    const classes = useStyles();
    const architects = props.links;
    const architectsSorted = architects.sort((a, b) => {return a.name > b.name ? 1 : -1} );
    return (
    <>
        <Container maxWidth="lg">
            <List>
            {architectsSorted.map((architect, i) =>
                <ListItem className={classes.listItem}
                    key={i}
                >
                    <ListItemAvatar>
                        <Avatar
                            alt={architect.name}
                            src={architect.image}
                        />
                    </ListItemAvatar>
                    <Link
                        component={RouterLink}
                        to={`/${architect.url}`}
                        underline="hover"
                    >
                        <ListItemText
                            classes={{primary: classes.item}}
                            primary={architect.name}
                        />
                    </Link>
                </ListItem>
            )}
            </List>
        </Container>
    </>
    )
}
