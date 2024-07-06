"use client";

import Link from "next/link";
import { styled, alpha } from "@mui/material";

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
}));
