import React from 'react'
import CadastroCircle from '../components/CadastroCircle/CadastroCircle'
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
                    <CadastroCircle position={[-27.59187466137091, -48.55210069634643]} quantity={1} />
                    <CadastroCircle position={[-27.599177051919657, -48.54763727737235]} quantity={2} />
                    <CadastroCircle position={[-27.591418245810043, -48.54110990475546]} quantity={4} />
                </Map>
            </MapWrapper>
        </PageWrapper>
    )
}

export default Landing