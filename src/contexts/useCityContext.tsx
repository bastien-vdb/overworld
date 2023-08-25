import React, { createContext, useContext, useState } from "react";
import { PropsWithChildren } from "react";
import type { CityType } from "@/types/City.type";

type CityContextType = {
  getCities: () => CityType[];
  setCities: (cities: CityType[]) => void;
  getActiveCountry: () => string;
  modifyActiveCountry: (country: string) => void;
}

const defaultCityContext: CityContextType = {
  getCities: () => [],
  setCities: () => { },
  getActiveCountry: () => "",
  modifyActiveCountry: () => { }
};

const CityContext = createContext<CityContextType>(defaultCityContext);

export const useCity = () => {
  return useContext(CityContext);
};

export const CityProvider = ({ children }: PropsWithChildren) => {
  const [citieslist, setCitiesList] = useState<CityType[]>([]);
  const [activeCountry, setActiveCountry] = useState('france');

  const setCities = (cities: CityType[]) => {
    setCitiesList(prev => [...prev, ...cities]);
  };

  const modifyActiveCountry = (country: string) => {
    setActiveCountry(country);
  };

  const getCities = () => {
    return citieslist;
  };

  const getActiveCountry = () => {
    return activeCountry;
  };

  return <CityContext.Provider value={{ getCities, setCities, modifyActiveCountry, getActiveCountry }}>
    {children}
  </CityContext.Provider>;
};
