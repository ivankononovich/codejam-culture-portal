import React from 'react';
import {Container, Typography} from "@material-ui/core";

function Developers(props) {
  return <>
    <Container style={{ display: "flex", flexWrap: "wrap", textAlign: 'center'}} justify="center">
      {props.developers.map((item, index) => {
        return  <div style={{ backgroundColor: '#cfe8fc', fontFamily: 'Roboto, Arial, sans-serif'}}>
          <img src={item.image} alt="Developer" style={{height: '150px', borderRadius: '15px'}}/>
          <Typography paragraph={true} style={{marginBottom: 30}}>{item.name}</Typography>
          <a href={item.github}>{item.github}</a>
          <Typography paragraph={true} style={{marginTop: 30}}>{item.contribution}</Typography>
        </div>
      })}
    </Container>
  </>
}

export default Developers;
