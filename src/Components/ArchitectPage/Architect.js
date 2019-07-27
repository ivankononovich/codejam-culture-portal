import React from 'react';
import { Container, Typography  } from '@material-ui/core'
import TimeLine from './TimeLine'
import ActivityMap from './ActivityMap'

function Architect(props) {
    return <>
        <Container style={{textAlign: 'center', fontFamily: 'Roboto, Arial, sans-serif'}} maxWidth="md" justify="center">
            <img src={props.image} alt="Фото" style={{height: '300px'}}/>
            <Typography variant="h4" component="h2" style={{margin: 10}}>{props.name}</Typography>
            <Typography variant="h6" style={{marginBottom: 10}}>Годы жизни: {props.born} - {props.deceased}</Typography>
            <Typography paragraph={true} style={{marginBottom: 30}}>{props.description}</Typography>
            <Typography variant="h4" component="h4">Биография</Typography>
            <TimeLine data={props.bio}/>
            <Typography variant="h4" component="h4"  style={{marginBottom: 50}}>Место основной деятельности</Typography>
            <ActivityMap data={props.mapData}/>
        </Container>
    </>
}

export default Architect;
