import React, {useState, useEffect} from 'react'
import { Circle } from 'react-leaflet'

interface CircleProps {
    quantity: number;
    position: [number, number];
}

const lowOption = { 
    fillColor: 'yellow',
    color: 'yellow'
 }
 const midOption = { 
    fillColor: 'orange',
    color: 'orange'
 }
 const hightOption = { 
    fillColor: 'red',
    color: 'red'
 }
const CadastroCircle: React.FC<CircleProps> = ({position, quantity}) => {
    const [color, setColor] = useState(lowOption)
     const returnColor = (): {fillColor: string, color: string} => {
        if(quantity < 2){
            return lowOption
        } else if (quantity >= 2 && quantity < 4){
            return midOption
        } else if (quantity >= 4) {
            return hightOption
        } else {
            return midOption
        }
     }
     useEffect(()=>{
      const newColor = returnColor()
      setColor(newColor)
    }, [quantity])
     //[-27.599177051919657, -48.54763727737235]
    return (
        <Circle 
            center={position} 
            pathOptions={color} 
            radius={200} 
        />
    )
}

export default CadastroCircle