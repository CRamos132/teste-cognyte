import React, {useState, useContext} from 'react'
import { Button } from '../components/Button'
import Field from '../components/Field/Field'
import Form from '../components/Form'
import PageWrapper from '../components/PageWrapper/PageWrapper'
import Row from '../components/Row'
import Title from '../components/Title'
import FormValidations from '../helpers/context/FormValidations'
import useErrors from '../helpers/hooks/useErrors'

const MainForm: React.FC = () => {
    const [cep, setCep] = useState('')
    const [number, setNumber] = useState('')
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const validacoes = useContext(FormValidations)
    const [errors, validateField, isSendAllowed] = useErrors(validacoes)
    return (
        <PageWrapper>
            <Title>Cadastrar nova residência</Title>
            <Form onSubmit={(event: React.FormEvent) => {
                event.preventDefault()
                if(isSendAllowed()){
                    console.log(cep, number, lat, long, quantidade)
                } else {
                    console.log(errors)
                }
            }}>
                <Row>
                    <Field 
                        name='cep' 
                        value={cep} 
                        label='CEP' 
                        hasError={!errors.cep.valid}
                        errorText={errors.cep.text}
                        onChange={(event)=>{
                            setCep(event.target.value)
                        }}
                        onBlur={validateField}
                        placeholder='XXXXXX-XX'
                    />
                    <Field 
                        name='number' 
                        value={number} 
                        label='Número' 
                        hasError={!errors.number.valid}
                        errorText={errors.number.text}
                        onBlur={validateField}
                        onChange={(event)=>{
                            setNumber(event.target.value)
                        }}
                        placeholder='XX'
                    />
                </Row>
                <Row>
                    <Field 
                        name='lat' 
                        value={lat} 
                        label='Latitude' 
                        hasError={!errors.lat.valid}
                        errorText={errors.lat.text}
                        onChange={(event)=>{
                            setLat(event.target.value)
                        }}
                        onBlur={validateField}
                        placeholder='XXXXXX-XX'
                    />
                    <Field 
                        name='long' 
                        value={long} 
                        label='Longitude' 
                        hasError={!errors.long.valid}
                        errorText={errors.long.text}
                        onChange={(event)=>{
                            setLong(event.target.value)
                        }}
                        onBlur={validateField}
                        placeholder='XX'
                    />
                </Row>
                <Row>
                    <Field 
                        name='quantidade' 
                        value={quantidade} 
                        label='Quantidade de moradores' 
                        hasError={!errors.quantidade.valid}
                        errorText={errors.quantidade.text}
                        onChange={(event)=>{
                            setQuantidade(event.target.value)
                        }}
                        onBlur={validateField}
                        placeholder='XX'
                    />
                </Row>
                <Button type='submit'>Cadastrar</Button>
            </Form>
        </PageWrapper>
    )
}

export default MainForm