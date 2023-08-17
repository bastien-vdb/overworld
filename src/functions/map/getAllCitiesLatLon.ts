import getCityLatLon from "@/functions/map/getCityLatLon";
import type { CityType } from "@/types/City.type";

const getAllCitiesLatLon = async (cityList:string[]) => {
    const citiesLatLon = await Promise.all(cityList.map(async city => {
      return await getCityLatLon(city);
    }));
    return citiesLatLon;
  };

  export default getAllCitiesLatLon;