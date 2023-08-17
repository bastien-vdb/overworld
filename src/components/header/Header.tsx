import React from 'react';
import Tabs from '@/components/tabs/Tabs';
import Avatar from './avatar/Avatar';
import Title from '@/components/header/Title';
import { useCity } from '@/contexts/useCityContext';
import { allCountries } from '@/utils/cities.config';
import { handleLoadCountry } from '@/functions/map/handleLoadCountry';

function Header() {

    const { setCities }: any = useCity();

    const HandleChangeCountry = async (country: any) => {
        const newCities = await handleLoadCountry(country.cities);
        setCities(newCities);
    }

    return (
        <div className="navbar bg-base-100 flex justify-between items-center">
            <Title text="OpenWorld" />
            <Tabs elements={allCountries} onTabClick={HandleChangeCountry} />
            <Avatar />
        </div>
    );
}

export default Header;
