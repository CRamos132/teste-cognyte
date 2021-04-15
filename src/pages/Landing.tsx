import React from 'react'
import Map from '../components/Map/Map'
import MapWrapper from '../components/MapWrapper'
import PageWrapper from '../components/PageWrapper/PageWrapper'
import Title from '../components/Title'

const Landing: React.FC = () => {
    return (
        <PageWrapper>
            <Title>Residências cadastradas</Title>
            <MapWrapper>
                <Map>
                </Map>
            </MapWrapper>
        </PageWrapper>
    )
}

export default Landing