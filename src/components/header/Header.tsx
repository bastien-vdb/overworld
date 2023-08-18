import React from 'react';
import Tabs from '@/components/tabs/Tabs';
import Avatar from './avatar/Avatar';
import Title from '@/components/header/Title';
import { useCity } from '@/contexts/useCityContext';
import { allCountries } from '@/utils/cities.config';
import { handleLoadCountry } from '@/functions/map/handleLoadCountry';
import type { CountryType } from '@/types/Country.type';

function Header() {

    const { setCities } = useCity();

    const handleChangeCountry = async (country: CountryType) => {
        const newCities = await handleLoadCountry(country.cities);
        setCities(newCities, country.country);
    }

    return (
        <div className="navbar bg-base-100 flex justify-between items-center">
            <Title text="OverWorld" />
            <Tabs elements={allCountries} onTabClick={handleChangeCountry} />
            <Avatar />
        </div>
    );
}

export default Header;
