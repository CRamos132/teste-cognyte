import React, {useEffect, useState} from 'react'
import CadastroCircle from '../components/CadastroCircle/CadastroCircle'
import Map from '../components/Map/Map'
import MapWrapper from '../components/MapWrapper'
import PageWrapper from '../components/PageWrapper/PageWrapper'
import Title from '../components/Title'
import Cadastro from '../helpers/interfaces/Cadastro'

const Landing: React.FC = () => {
    const [cadastros, setCadastros] = useState<Cadastro[]>([])
    useEffect(()=>{
        fetch('http://localhost:8080/cadastros').then(async response => {
            const data = await response.json()
            if(response.status === 200){
                setCadastros(data)
            } else {
                alert('Algo deu errado')
            }
        })
    },[])
    return (
        <PageWrapper>
            <Title>Residências cadastradas</Title>
            <MapWrapper>
                <Map>
                    {cadastros.map((cadastro, index) => {
                        return (
                            <CadastroCircle 
                                key={`key_cadastro_${index}`}
                                position={cadastro.position} 
                                quantity={Number(cadastro.quantidade)} 
                            />
                        )    
                    })}
                </Map>
            </MapWrapper>
        </PageWrapper>
    )
}

export default Landing