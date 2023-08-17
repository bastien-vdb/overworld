import getCityLatLon from "@/functions/map/getCityLatLon";

const getAllCitiesLatLon = async (cityList:string[]) => {
    const citiesLatLon = await Promise.all(cityList.map(async city => {
      return await getCityLatLon(city);
    }));
    return citiesLatLon;
  };

  export default getAllCitiesLatLon;