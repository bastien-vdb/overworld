import React, { createContext, useContext, useState } from "react";
import { PropsWithChildren } from "react";

const CityContext = createContext(null);

export const useCity = () => {
  return useContext(CityContext);
};

export const CityProvider = ({ children }: PropsWithChildren) => {
  const [citylist, setCityList] = useState([]);
  const [activeCountry, setActiveCountry] = useState('');

  const setCities = (city: any, country:any) => {
    setCityList(city);
    setActiveCountry(country);
  };

  const getCities = () => {
    return citylist;
  };

  const getActiveCountry = () => {
    return activeCountry;
  };

  console.log(citylist);

  return <CityContext.Provider value={{ getCities, setCities, getActiveCountry, activeCountry } as any}>
    {children}
  </CityContext.Provider>;
};
