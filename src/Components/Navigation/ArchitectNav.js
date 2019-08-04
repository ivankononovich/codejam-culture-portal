import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Link, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '1em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.2)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(26, 24, 58, .6)',
      outline: '1px solid #a4bcd1'
    },
  },
    item: {
        fontSize: '24px',
        fontFamily: 'Impact, sans-serif',
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
