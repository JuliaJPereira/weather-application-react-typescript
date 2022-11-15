import { Container, Button, Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <Container>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "#4caf50",
          "&:hover": {
            backgroundColor: "#2e7d32",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Button variant="contained">{t("HELLO_WORLD")}</Button>
        <TextField id="outlined-basic" label={t('SEARCH_BY_CITY')} variant="outlined" />
        <Button variant="contained">{t('SEARCH_BY_CITY')}</Button>
      </Box>
    </Container>
  );
}

export default Home;
