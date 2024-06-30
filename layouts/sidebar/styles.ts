"use client";
import { Box, List } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Link from "next/link";

export const StyledSidebar = styled(Box)(({ theme }) => ({
  flexDirection: "column",
  minHeight: "100vh",
  position: "absolute",
  top: 0,
  left: 0,
  transition: "transform 0.3s ease",
  backgroundColor: alpha(theme.palette.primary.dark, 1),
  boxShadow: "20px 5px 15px rgb(7 7 7 / 20%)",

  [theme.breakpoints.up("md")]: {
    "&.sidebar": {
      display: "none",
      backgroundColor: "orange",
    },
  },
}));

export const StyledBrandLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  backgroundImage: `
  linear-gradient(90deg, ${alpha(theme.palette.success.main, 1)} 0%, 
  ${alpha(theme.palette.primary.main, 1)} 100%)
  `,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: "1.5em",
  fontWeight: "900",
  paddingTop: "12px",
}));

export const StyledList = styled(List)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "5px",

  "& li": {
    width: "auto",
  },

  "& li a": {
    color: alpha(theme.palette.success.main, 1),
    textDecoration: "none",
    fontWeight: "300",
  },
}));
