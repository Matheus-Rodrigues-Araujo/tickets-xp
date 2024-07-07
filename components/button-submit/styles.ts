"use client";

import { Button } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from "@mui/material/styles";

import { alpha } from "@mui/system/colorManipulator";

export const ButtonSubmit = styled(Button)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "& a": {
    color: alpha(theme.palette.success.main, 1),
  },
}));

export const StyledLoading = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.common.white
}));
