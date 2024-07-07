"use client";

import AppBar from "@mui/material/AppBar";
import Stack from '@mui/material/Stack';
import { styled } from "@mui/material/styles";
import { alpha } from "@mui/system/colorManipulator";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.dark, 1),
  position: "relative",
  boxShadow: "none",
  display: "flex",
}));

export const StyledStack = styled(Stack)(({ theme }) => ({
  width: "80%",

  [theme.breakpoints.up("md")]: {
    width: "26rem",
  },
}));

export const StyledForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "100%",
}));

export const StyledFooter = styled("footer")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "& a": {
    color: alpha(theme.palette.success.main, 1),
  },
}));
