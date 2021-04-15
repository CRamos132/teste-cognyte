import React from 'react'

const validateBasic = (dados: string) => {
    if(!dados){
        return { valid: false, text: "Campo obrigatório" }    
    }
    return { valid: true, text: "" }
}

const validateNumber = (dados: string) => {
    if(!dados){
        return { valid: false, text: "Campo obrigatório" }    
    }
    if(Number(dados) < 0) {
        return { valid: false, text: "Número negativo inválido" }    
    }
    return { valid: true, text: "" }
}

const validateCep = (dados: string) => {
    if(!dados){
        return { valid: false, text: "Campo obrigatório" }    
    }
    if(dados.length !== 8){
        return { valid: false, text: "CEP deve ter 8 dígitos" }
    }
    return { valid: true, text: "" }
}

const FormValidations = React.createContext({
    cep: validateCep, 
    number: validateNumber,
    quantidade: validateNumber
});

export default FormValidations