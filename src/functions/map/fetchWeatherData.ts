import fetcher from '@/utils/fetcher';


const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY || '7f2a99cdf1e9e547dfe2cd9193c86148';

export const fetchWeatherData = async (cities:any) => {

    const weatherData = await Promise.all(cities.map(async(city:any) => {
    
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${apiKey}`;
      
      const response = await fetcher(url);
      return {
        name: city.name,
        lat: city.lat,
        lon: city.lon,
        weather: response.weather[0].description,
        temperature: response.main.temp,
      };
    }));

    return (weatherData);
  };