import { createTheme } from "@mui/material";

const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#299DCF",
      dark: "#0E0D0D",
    },
    secondary: {
      main: "#994422",
    },
    success: {
      main: "#B0D741",
      light: "#B0D741",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
  },
});

const theme = createTheme(baseTheme, {
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            backgroundColor: "white",
            height: "3.125rem",
            borderRadius: "5px",
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "submit" },
          style: {
            height: "3.125rem",
            fontSize: "1rem",
            fontWeight: "700",
            borderRadius: "5px",
            backgroundImage: `linear-gradient(90deg, ${baseTheme.palette.success.main} 0%, ${baseTheme.palette.primary.main} 100%)`,
            "&:hover": {
              background: baseTheme.palette.primary.main,
            },
          },
        },
      ],
    },
  },
});

export default theme;
