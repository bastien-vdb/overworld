import React from 'react';
import { Tooltip } from 'react-leaflet';
import type { CityType } from '@/types/City.type';

type TooltipCompProps = {
    city: CityType;
};

function TooltipComp({ city }: TooltipCompProps) {
    return (
        <Tooltip>
            <p>City: {city.name}</p>
            <p>Weather: {city.weather}</p>
            <p>Temperature: {city.temperature}°C</p>
        </Tooltip>
    );
}

export default TooltipComp;