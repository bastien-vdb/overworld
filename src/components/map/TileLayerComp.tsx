import React from 'react';
import { TileLayer } from 'react-leaflet';

function TileLayerComp() {
    return (
        <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.carto.com/attributions">CARTO</a>'
        />
    );
}

export default TileLayerComp;