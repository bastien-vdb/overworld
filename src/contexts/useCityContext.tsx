import React, { createContext, useContext, useState } from "react";
import { PropsWithChildren } from "react";
import type { CityType } from "@/types/City.type";

type CityContextType = {
  getCities: () => CityType[];
  setCities: (cities: CityType[], country: string) => void;
  getActiveCountry: () => string;
  activeCountry: string;
}

const defaultCityContext: CityContextType = {
  getCities: () => [],
  setCities: () => { },
  getActiveCountry: () => "",
  activeCountry: ""
};

const CityContext = createContext<CityContextType>(defaultCityContext);

export const useCity = () => {
  return useContext(CityContext);
};

export const CityProvider = ({ children }: PropsWithChildren) => {
  const [citylist, setCityList] = useState<CityType[]>([]);
  const [activeCountry, setActiveCountry] = useState('');

  const setCities = (cities: CityType[], country: string) => {
    console.log('city', cities);
    console.log('country', country);
    setCityList(cities);
    setActiveCountry(country);
  };

  const getCities = () => {
    return citylist;
  };

  const getActiveCountry = () => {
    return activeCountry;
  };

  console.log(citylist);

  return <CityContext.Provider value={{ getCities, setCities, getActiveCountry, activeCountry }}>
    {children}
  </CityContext.Provider>;
};
