"use client";
import { Box, List } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Link from "next/link";

export const Overlay = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: alpha(theme.palette.common.black, 0.5),
  zIndex: 1,
}));

export const StyledSidebar = styled(Box)(({ theme }) => ({
  flexDirection: "column",
  minHeight: "100vh",
  position: "absolute",
  width: "220px",
  top: 0,
  left: 0,
  transition: "transform 0.3s ease",
  backgroundColor: alpha(theme.palette.primary.dark, 1),
  zIndex: 1000,
  transform: "translateX(0)",

  "& a": {
    cursor: "pointer",
  },

  "&.hidden": {
    transform: "translateX(-100%)",
  },
  "&:not(.hidden)": {
    transform: "translateX(0)",
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
