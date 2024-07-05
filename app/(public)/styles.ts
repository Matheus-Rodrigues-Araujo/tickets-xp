"use client";
import { Height } from "@mui/icons-material";
import { alpha, Box, styled } from "@mui/material";

export const StyledContent = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  alignItems: "center",
  position: "relative",
  padding: "20px",
  gap: "10px",
  color: alpha(theme.palette.success.main, 1),
  backgroundColor: alpha(theme.palette.primary.dark, 1),

  "& h1": {
    fontSize: "5rem",
  },

  [theme.breakpoints.down("xl")]: {
    "& h1": {
      fontSize: "4rem",
    },
  },

  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "1fr",
    "& h1": {
      fontSize: "3rem",
    },
  },

  [theme.breakpoints.down("md")]: {
    "& h1": {
      fontSize: "2rem",
    },
  },
}));

export const StyledImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",

  "& img": {
    maxWidth: "100%",
    borderRadius: "10px",
  },

  [theme.breakpoints.up("md")]: {
    "& img": {
      maxHeight: "600px",
    },
  },

  [theme.breakpoints.down("md")]: {
    "& img": {
      maxHeight: "300px",
    },
  },

  [theme.breakpoints.down("xs")]: {
    "& img": {
      maxHeight: "200px",
    },
  },
}));
