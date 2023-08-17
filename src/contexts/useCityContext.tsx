import React, { createContext, useContext, useState } from "react";
import { PropsWithChildren } from "react";

const CityContext = createContext(null);

export const useCity = () => {
  return useContext(CityContext);
};

export const CityProvider = ({ children }: PropsWithChildren) => {
  const [citylist, setCityList] = useState([]);

  const setCities = (city: any) => {
    setCityList(city);
  };

  const getCities = () => {
    return citylist;
  };

  console.log(citylist);

  return <CityContext.Provider value={{ getCities, setCities } as any}>
    {children}
  </CityContext.Provider>;
};
