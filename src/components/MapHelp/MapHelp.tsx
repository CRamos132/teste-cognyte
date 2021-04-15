import React from 'react'
import {Helper} from './style'

const MapHelp: React.FC = () => {
    return (
        <Helper>
            <span>
                Cada círculo é uma residência cadastrada.
                <br />
                <div className="label">
                    <div className="square" style={{backgroundColor: 'yellow'}}></div>
                    1 residente
                </div>
                <div className="label">
                    <div className="square" style={{backgroundColor: 'orange'}}></div>
                    Entre 2 e 3 residentes
                </div>
                <div className="label">
                    <div className="square" style={{backgroundColor: 'red'}}></div>
                    Entre 4 e 5 residentes
                </div>
                <div className="label">
                    <div className="square" style={{backgroundColor: '#400000'}}></div>
                    Mais que 5 residentes
                </div>
            </span>
        </Helper>
    )
}

export default MapHelp