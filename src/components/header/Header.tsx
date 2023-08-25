import React from 'react';
import Tabs from '@/components/tabs/Tabs';
import Avatar from './avatar/Avatar';
import Title from '@/components/header/Title';
import { useCity } from '@/contexts/useCityContext';
import { allCities } from '@/utils/cities.config';
import { getCitiesLocalisation } from '@/functions/map/getCitiesLocalisation'
import { getCitiesMetetoData } from '@/functions/map/getCitiesMetetoData';

function Header() {

    const { modifyActiveCountry, getActiveCountry } = useCity();
    const activeTab = getActiveCountry();

    const { setCities, getCities } = useCity();

    const handleOnTabClick = async (activeCountry: string) => {
        modifyActiveCountry(activeCountry);

        //We check if the data for this country have been load before, if yes, we don't fetch data anymore
        if (getCities().some(city => city.country === activeCountry)) return;
        const citiesLocalisation = await getCitiesLocalisation(allCities[activeCountry], activeCountry);
        const citiesMetetoData = await getCitiesMetetoData(citiesLocalisation);
        setCities(citiesMetetoData);
    }

    return (
        <div className="navbar bg-base-100 flex justify-between items-center">
            <Title text="OverWorld" />
            <Tabs tabs={allCities} onTabClick={handleOnTabClick} activeTab={activeTab} />
            <Avatar />
        </div>
    );
}

export default Header;
