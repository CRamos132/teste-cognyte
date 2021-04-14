import React from 'react'

const semValidacao = (dados: string) => {
    if(dados){
        return { valid: true, text: "" }
    } else {
        return { valid: false, text: "Campo obrigatório" }
    }
    // return { valid: false, text: "" }
}

const validateCep = (dados: string) => {
    if(dados === 'A'){
        return { valid: false, text: "Erro" }
    } else if (dados) {
        return { valid: true, text: "" }
    }
    return { valid: false, text: "" }
}

const FormValidations = React.createContext({
    cep: validateCep, 
    number: semValidacao, 
    long: semValidacao, 
    lat: semValidacao, 
    quantidade: semValidacao
});

export default FormValidations