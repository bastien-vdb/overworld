import React from 'react';
import { Tooltip } from 'react-leaflet';

function TooltipComp(city: any) {
    return (
        <Tooltip>
            <p>City: {city.name as any}</p>
            <p>Weather: {city.weather as any}</p>
            <p>Temperature: {city.temperature as any}°C</p>
        </Tooltip>
    );
}

export default TooltipComp;