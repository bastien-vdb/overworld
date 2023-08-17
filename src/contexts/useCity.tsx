import React, { createContext, useContext, useState } from "react";
import { PropsWithChildren } from "react";

const CityContext = createContext(null);

export const useCity = () => {
  return useContext(CityContext);
};

export const CityProvider = ({ children }: PropsWithChildren) => {
  const [cities, setCities] = useState([]);

  // Fonction pour ajouter une ville
  const setCity = (city: any) => {
    setCities(city);
  };

  return <CityContext.Provider value={{ cities, setCity } as any}>
  {children}
  </CityContext.Provider>;
};
