import React, {useState} from 'react'
import Field from '../components/Field/Field'
import Form from '../components/Form'
import PageWrapper from '../components/PageWrapper/PageWrapper'
import Row from '../components/Row'
import Title from '../components/Title'

const MainForm: React.FC = () => {
    const [cep, setCep] = useState('')
    return (
        <PageWrapper>
            <Title>Cadastrar nova residência</Title>
            <Form>
                <Row>
                    <Field 
                        name='cep' 
                        value={cep} 
                        label='CEP' 
                        onChange={(event)=>{setCep(event.target.value)}}
                        placeholder='XXXXXX-XX'
                    />
                    <Field 
                        name='cep' 
                        value={cep} 
                        label='CEP' 
                        onChange={(event)=>{setCep(event.target.value)}}
                        placeholder='XXXXXX-XX'
                    />
                </Row>
            </Form>
        </PageWrapper>
    )
}

export default MainForm