import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    card: {
      maxWidth: '90vw',
    },
});

export default (props) => {
    const architects = props.links;
    const classes = useStyles();
    return <>
        <ul >
        {architects.map((architector, i) =>
            <li
                style={{listStyle: 'none'}}
                key={i}
            >
                <Link
                    to={`/${architector.url}`}
                >
                    <Card className={classes.card}>
                    {architector.name}
                    </Card>
                </Link>
            </li>)}
        </ul>
    </>
}
