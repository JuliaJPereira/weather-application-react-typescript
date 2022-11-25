import { Container, Button, Box, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useGetWeather } from "../../services/index";

function Home() {
  const [city, setCity] = useState('');
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

        {weather &&
          <Box>
          <Typography>{setWeather.name}</Typography>
          <Box>
            <img src={"sjkdhkjf"} alt={"ícone do clima"} />
            <Typography>{weather.data.main.temp}</Typography>
          </Box>
        </Box>
        }
        
      </Box>
    </Container>
  );
}

export default Home;
