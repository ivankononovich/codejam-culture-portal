import React from 'react';
import { Container, Typography  } from '@material-ui/core'
import TimeLine from './TimeLine'
import ActivityMap from './ActivityMap'
import Projects from './Projects'
import './Architect.css'

function Architect(props) {
    return <>
        <Container className="architectContainer" maxWidth="md" justify="center" style={{fontFamily: 'Roboto, sans-serif'}}>
            <img className="architectImage" src={props.image} alt="Фото"/>
            <Typography className="architectName" variant="h4" component="h2">{props.name}</Typography>
            <Typography className="architectYears" variant="h6">Годы жизни: {props.born} - {props.deceased}</Typography>
            <Typography className="architectDescription" paragraph={true}>{props.description}</Typography>
            <Typography className="architectBio" variant="h4">Биография</Typography>
            <TimeLine data={props.bio}/>
            <Typography style={{ color: '#3ac14c' }} variant="h4">Проекты</Typography>
            <Projects data={props.project} column={props.projectHeader}/>
            <Typography className="architectMap" variant="h4">Место основной деятельности</Typography>
            <ActivityMap data={props.mapData}/>
            <Typography className="architectGallery" variant="h4">Фотогалерея</Typography>
            
        </Container>
    </>
}

export default Architect
  