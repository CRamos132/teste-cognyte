import React from 'react'

const semValidacao = (dados: string) => {
    console.log(dados);
    return { valid: false, text: "" }
}

const validateCep = (dados: string) => {
    if(dados === 'A'){
        return { valid: false, text: "Erro" }
    }
    return { valid: false, text: "" }
}

const FormValidations = React.createContext({cep: validateCep, number: semValidacao});

export default FormValidations