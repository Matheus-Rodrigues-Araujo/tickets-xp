"use client";
import { Box } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

export const StyledFooter = styled("footer")(({ theme }) => ({
  display: "flex",
  paddingBlock: '20px',
  alignItems: 'center',
  bottom: 0,
  position: "absolute",
  width: "100%",
  backgroundColor: alpha(theme.palette.primary.dark, 1),
  fontWeight: "100",
  
  "& a": {
    textDecoration: "none",
    color: "white",
    fontSize: '14px'
  },

  "& p": {
    color: "white",
  },

  "& ul": {
    display: "flex",
  paddingBlock: '20px',
  alignItems: 'center',
  }


}));

export const StyledFooterLinks = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    gap: '10px',
    flexWrap: 'wrap',
    
}));
