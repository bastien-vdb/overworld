import React, { useState } from 'react';
import { useCity } from '@/contexts/useCityContext';
import getAllCitiesLatLon from '@/functions/map/getAllCitiesLatLon';
import { fetchWeatherData } from '@/functions/map/fetchWeatherData';

function Tabs({ elements, onTabClick }: any) {
    const [activeTab, setActiveTab] = useState(elements[0].country || '');

    function handleTabClick(country: string) {
        setActiveTab(country.country);
        onTabClick(country)
      }

    console.log(elements);

    return (
        <div className="tabs">
            {elements.map((country: any) => (
                <a className={`tab tab-lifted ${activeTab === country.country ? 'tab-active' : ''}`} key={country.country} onClick={()=>handleTabClick(country)}>
                    {country.country}
                </a>
            ))}

        </div>
    );
}

export default Tabs;