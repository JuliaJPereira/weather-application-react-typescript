import axios from "axios";

export const useGetWeather = () => {
  const getWeather = async () => {

    let response1 = await axios.get(
      "https://api.openweathermap.org/geo/1.0/direct?q=Blumenau&limit=1&appid=e83ae355fb450341a30c6df3a60135d7"
    );

    let response2 = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${response1.data[0].lat}&lon=${response1.data[0].lon}&appid=e83ae355fb450341a30c6df3a60135d7&units=metric`
    );
    console.log(response2);
    console.log('Temperatura: ' + response2.data.main.temp, response2.data.weather[0].main);
  };

  return { getWeather };
};
