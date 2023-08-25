import { CityType } from "@/types/City.type";
import fetcher from "@/utils/fetcher";

const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY || "7f2a99cdf1e9e547dfe2cd9193c86148";


export const getCitiesMetetoData = async (citiesLocalisation: CityType[]) => {
    return await Promise.all(
      citiesLocalisation.map(async (city: CityType) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${apiKey}`;
        try {
          const response = await fetcher(url);
          return {
            ...city,
            weather: response.weather[0].description,
            temperature: response.main.temp,
          };
        }
        catch (error: any) {
            console.log('errrrooooor!')
          throw new Error(error);
        };
      })
    );
  }