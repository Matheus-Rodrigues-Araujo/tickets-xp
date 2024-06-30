"use client";
import { alpha, Box, styled } from "@mui/material";

export const StyledContent = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  gap: "10px",
  color: alpha(theme.palette.success.main, 1),
  backgroundColor: alpha(theme.palette.primary.dark, 1),

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));
