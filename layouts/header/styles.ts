"use client";
import { AppBar, List } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Link from "next/link";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.dark, 1),
  position: "relative",
  boxShadow: 'none',
  display: 'flex',
  
  "& div": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },


  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

export const StyledList = styled(List)(({ theme }) => ({
  display: "flex",
  gap: "5px",
  "& li": {
    width: "auto",
  },
  "& li a": {
    color: alpha(theme.palette.success.main, 1),
    textDecoration: "none",
    fontWeight: "300",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
