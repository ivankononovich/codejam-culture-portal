import React from 'react';
import { Container, Typography  } from '@material-ui/core'
import TimeLine from '../ArchitectPage/TimeLine'

function Architect(props) {
    return <> 
        <Container style={{textAlign: 'center'}} maxWidth="md" justify="center">
            <img src={props.image} alt="Фото" style={{height: '300px'}}></img>
            <Typography variant="h4" component="h2" style={{margin: 10}}>{props.name}</Typography>
            <Typography variant="h6" style={{marginBottom: 10}}>Годы жизни: {props.born} - {props.deceased}</Typography>
            <Typography paragraph={true} style={{marginBottom: 30}}>{props.description}</Typography>
            <Typography variant="h4" component="h4">Биография</Typography>
            <TimeLine data={props.bio}/>
        </Container>
    </>
}

export default Architect;