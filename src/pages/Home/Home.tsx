import { Container, Button, Box, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useGetWeather } from "../../services/index";

export interface Clima {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();

  const { t } = useTranslation();

  const { getWeather } = useGetWeather();

  const onClick = async () => {
    await getWeather(city, setCity);
  };

  return (
    <Container>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "#4caf50",
        }}
      >
        <Typography variant="h4">{t("HELLO_WORLD")}</Typography>
        <TextField
          id="outlined-basic"
          label={t("SEARCH_BY_CITY")}
          variant="outlined"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <Button variant="contained" onClick={onClick}>
          {t("SEARCH_BY_CITY")}
        </Button>

        {weather && (
          <Box>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default Home;
