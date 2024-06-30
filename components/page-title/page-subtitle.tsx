import { Typography } from "@mui/material";
import React, { ReactNode } from "react";

export const PageSubtitle = ({
  children,
  variant,
}: {
  children: ReactNode;
  variant: "subtitle1" | "subtitle2";
}) => {
  return <Typography variant={variant}>{children}</Typography>;
};
