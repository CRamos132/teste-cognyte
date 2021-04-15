import React, {useState} from 'react'

interface validationInterface { 
    valid: boolean;
    text: string ;
}

const createInitialState = (validations: Record<string, (data: string) => validationInterface>) => {
    const initialState: Record<string, string> = {}
    for (let field in validations){
        initialState[field] = ''
    }
    return initialState
}

const useForm = (validations: Record<string, (data: string) => validationInterface>): [
    Record<string, string>,
    (event: React.ChangeEvent<HTMLInputElement>) => void,
    () => boolean
] => {
    const initialState = createInitialState(validations)
    const [fields, setFields] = useState(initialState)
    const updateFields = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setFields({...fields, [name]: value})
    }
    const isEmpty = () => {
        for(let field in fields){
          if(![field]){
            return false
          }
        }
        return true
      }
    return [fields, updateFields, isEmpty]
}

export default useForm