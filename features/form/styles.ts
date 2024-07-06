"use client";

import AppBar from "@mui/material/AppBar";
import { styled, alpha } from "@mui/material";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.dark, 1),
  position: "relative",
  boxShadow: "none",
  display: "flex",
}));

export const StyledForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "100%",

  "& .MuiTextField-root": {
    height: "3em",
    backgroundColor: "white",
  },
  "& .MuiButton-root": {
    height: "3em",
    backgroundColor: "white",
  },
}));

export const StyledFooter = styled("footer")(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& a': {
    color: alpha(theme.palette.success.main, 1),
  }

}));