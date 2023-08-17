import getAllCitiesLatLon from "@/functions/map/getAllCitiesLatLon";
import { fetchWeatherData } from "@/functions/map/fetchWeatherData";

export const handleLoadCountry = async (country: string[]) => {
  const cities = await getAllCitiesLatLon(country);
  const citiesWithMetetoData = await fetchWeatherData(cities);
  return citiesWithMetetoData;
};
