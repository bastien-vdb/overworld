import getCityLatLong from "@/functions/map/getCityLatLon";
import { CityType } from "@/types/City.type";

export const getCitiesLocalisation = async (cityPerCountry: string[], country: string): Promise<CityType[]> => {
    console.log('fetch')
  return await Promise.all(
    cityPerCountry.map(async (city) => {
      const cityLocalisation = await getCityLatLong(city);
      return { country, ...cityLocalisation };
    })
  );
};
