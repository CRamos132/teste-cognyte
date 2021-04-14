import React, {useState, useContext} from 'react'
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
    const validacoes = useContext(FormValidations)
  const [errors, validateField, isSendAllowed] = useErrors(validacoes)
    return (
        <PageWrapper>
            <Title>Cadastrar nova residência</Title>
            <Form onSubmit={(event: React.FormEvent) => {
                event.preventDefault()
                if(isSendAllowed()){
                    console.log('valido')
                } else {
                    console.log('inválido')
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
                        onChange={(event)=>{setNumber(event.target.value)}}
                        placeholder='XX'
                    />
                </Row>
            </Form>
        </PageWrapper>
    )
}

export default MainForm