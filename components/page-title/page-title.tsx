import { Typography } from "@mui/material";
import React, { ReactNode } from "react";

export const PageTitle = ({
  children,
  variant,
}: {
  children: ReactNode;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) => {
  return <Typography variant={variant}>{children}</Typography>;
};
