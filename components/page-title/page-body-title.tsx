import { Typography } from "@mui/material";
import React, { ReactNode } from "react";

export const PageBodyTitle = ({
  children,
  variant,
}: {
  children: ReactNode;
  variant: "body1" | "body2";
}) => {
  return <Typography variant={variant}>{children}</Typography>;
};
