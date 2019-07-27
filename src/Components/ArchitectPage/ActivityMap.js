import React from 'react'
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps'
import { Container } from '@material-ui/core'

const ActivityMap = (props) => {
    return (
        <Container>
            <YMaps>
                <Map defaultState={props.data} width="100%" height="400px" >
                <Placemark geometry={props.data.center} />
                <ZoomControl options={{ float: 'right' }} />
                </Map>
            </YMaps>
        </Container>
    )
}

export default ActivityMap

