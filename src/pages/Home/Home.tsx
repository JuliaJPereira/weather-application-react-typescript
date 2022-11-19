import { Container, Button, Box, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useGetWeather } from "../../services/index";

function Home() {
  const { t } = useTranslation();

  const { getWeather } = useGetWeather();

  const onClick = async () => {
    await getWeather();
  };

  return (
    <Container>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "#4caf50"
        }}
      >
        <Typography variant="h4">{t("HELLO_WORLD")}</Typography>
        <TextField
          id="outlined-basic"
          label={t("SEARCH_BY_CITY")}
          variant="outlined"
        />
        <Button variant="contained" onClick={onClick}>
          {t("SEARCH_BY_CITY")}
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
