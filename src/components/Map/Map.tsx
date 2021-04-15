import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

interface MapProps {
    center?: [number, number]
}

const Map: React.FC<MapProps> = ({center = [-27.5969, -48.5495] ,children}) => {
    return (
        <MapContainer style={{ width: "100%", height: "100%" }} center={center} zoom={13} scrollWheelZoom={true}>
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {children}
        </MapContainer>
    )
}

export default Map