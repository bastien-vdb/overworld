import React, { useState } from 'react';
import { CountryType } from '@/types/Country.type';

type TabsType = {
    elements: CountryType[],
    onTabClick: (country: CountryType) => void,
}


function Tabs({ elements, onTabClick }: TabsType) {

    const [activeTab, setActiveTab] = useState(elements[0].country || '');

    function handleTabClick(element: CountryType) {
        setActiveTab(element.country);
        onTabClick(element)
      }

    console.log(elements);

    return (
        <div className="tabs">
            {elements.map((element: any) => (
                <a className={`tab tab-lifted ${activeTab === element.country ? 'tab-active' : ''}`} key={element.country} onClick={()=>handleTabClick(element)}>
                    <span className={`text-gray-300 ${activeTab === element.country ? 'font-bold text-gray-600 text-xl duration-700' : ''}`}>{element.country.toUpperCase()}</span>
                </a>
            ))}

        </div>
    );
}

export default Tabs;