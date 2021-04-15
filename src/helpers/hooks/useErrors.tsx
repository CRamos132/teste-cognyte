import React, {useState} from 'react'

interface validationInterface { 
    valid: boolean;
    text: string ;
}


const createInitialState = (validations: Record<string, (data: string) => validationInterface>) => {
    const initialState: Record<string, validationInterface> = {}
    for (let field in validations){
        initialState[field] = {valid: true, text: "" }
    }
    return initialState
}

const useErrors = (validations: Record<string, (data: string) => validationInterface>): 
[
    Record<string, validationInterface>, 
    (event: React.ChangeEvent<HTMLInputElement>) => void,
    () => boolean,
] => {
    const estadoInicial = createInitialState(validations)
    const [errors, setErrors] = useState(estadoInicial)
    const validateFields = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        const validation = validations[name]
        const isValid = validation(value)
        setErrors({...errors, [name]: isValid})
    }

    const isSendAllowed = () => {
        for(let field in errors){
          if(!errors[field].valid){
            return false
          }
        }
        return true
      }

    return [errors, validateFields, isSendAllowed]
}

export default useErrors